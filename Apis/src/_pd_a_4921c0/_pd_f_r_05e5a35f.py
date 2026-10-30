#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PingDart AI Recommendation & Speech/Location Intelligence Engine
Standalone Python Micro-Module for Social Video / Reels Personalization.
"""

import sys
import json
import math
import re
from typing import List, Dict, Any

# Emotion Lexicon & Keyword Vectors
EMOTION_KEYWORDS = {
    "sad": [
        "sad", "heartbreak", "heartbroken", "crying", "cry", "lonely", "alone",
        "pain", "tears", "miss you", "missing", "grief", "depressed", "broken",
        "hurt", "unsaid", "sadness", "brokenheart", "rain", "gloomy"
    ],
    "romantic": [
        "love", "romantic", "romance", "couple", "cute", "date", "relationship",
        "sunset", "hugs", "sweet", "darling", "soulmate", "forever", "together",
        "crush", "kiss", "lovers", "valentines"
    ],
    "funny": [
        "funny", "joke", "jokes", "meme", "memes", "laugh", "laughing", "hilarious",
        "lol", "rofl", "comedy", "humor", "prank", "crazy", "silly", "fun"
    ],
    "motivational": [
        "workout", "gym", "fitness", "motivation", "motivational", "hustle",
        "hard work", "success", "focus", "energy", "training", "grind", "inspire",
        "inspiration", "discipline", "power", "bodybuilding", "run", "speed"
    ],
    "energetic": [
        "dance", "party", "dj", "music", "beats", "electronic", "synth", "club",
        "celebration", "banger", "festival", "bass", "concert", "stage"
    ],
    "peaceful": [
        "nature", "relax", "peace", "peaceful", "calm", "mountain", "river",
        "meditation", "tranquil", "coffee", "breeze", "ambient", "ocean", "waves"
    ],
    "food": [
        "food", "hungry", "recipe", "restaurant", "cooking", "biryani", "dish",
        "chef", "tasty", "delicious", "eating", "snack", "dinner", "lunch"
    ]
}

CITY_SYNONYMS = {
    "hyderabad": ["hyderabad", "secunderabad", "cyberabad", "telangana"],
    "mumbai": ["mumbai", "bombay", "maharashtra"],
    "delhi": ["delhi", "new delhi", "ncr", "noida", "gurgaon"],
    "bangalore": ["bangalore", "bengaluru", "karnataka"],
    "chennai": ["chennai", "madras", "tamil nadu"],
    "kolkata": ["kolkata", "calcutta", "west bengal"],
    "pune": ["pune", "maharashtra"],
    "jaipur": ["jaipur", "rajasthan"],
    "ahmedabad": ["ahmedabad", "gujarat"]
}


def clean_text(text: str) -> str:
    if not text:
        return ""
    return re.sub(r"[^\w\s#]", " ", text.lower()).strip()


def detect_speech_mood(text: str) -> Dict[str, float]:
    """Analyzes text/speech from the user and detects dominant emotion scores."""
    cleaned = clean_text(text)
    scores = {mood: 0.0 for mood in EMOTION_KEYWORDS}
    words = cleaned.split()

    if not words:
        return scores

    for mood, keywords in EMOTION_KEYWORDS.items():
        for kw in keywords:
            if " " in kw:
                # Phrase match
                if kw in cleaned:
                    scores[mood] += 3.0
            else:
                # Word match
                count = words.count(kw)
                if count > 0:
                    scores[mood] += float(count * 2.0)

    # Normalize scores
    total = sum(scores.values())
    if total > 0:
        scores = {k: round(v / total, 3) for k, v in scores.items()}

    return scores


def score_location_match(user_city: str, reel_location: str) -> float:
    """Calculates location similarity between user's city and reel's tag."""
    if not user_city or not reel_location:
        return 0.0

    u_clean = user_city.lower().strip()
    r_clean = reel_location.lower().strip()

    if u_clean in r_clean or r_clean in u_clean:
        return 1.0

    # Check city synonyms
    for city_key, synonyms in CITY_SYNONYMS.items():
        user_matches = any(s in u_clean for s in synonyms)
        reel_matches = any(s in r_clean for s in synonyms)
        if user_matches and reel_matches:
            return 1.0

    return 0.0


def rank_reels_ai(user_signals: Dict[str, Any], candidate_reels: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Main AI Ranking Algorithm:
    - User speech mood vector
    - Location proximity
    - Historical user likes and watch history
    - Seen penalty (anti-duplicate feed)
    - Social engagement & exploration jitter
    """
    speech_text = user_signals.get("speech_text", "")
    user_location = user_signals.get("location", {})
    user_city = user_location.get("city", "") if isinstance(user_location, dict) else str(user_location or "")
    seen_ids = set(str(sid) for sid in user_signals.get("seen_ids", []))
    preferred_moods = user_signals.get("preferred_moods", [])
    liked_ids = set(str(lid) for lid in user_signals.get("liked_ids", []))

    detected_mood_scores = detect_speech_mood(speech_text)
    dominant_speech_mood = max(detected_mood_scores.items(), key=lambda x: x[1])[0] if any(detected_mood_scores.values()) else None

    scored_reels = []

    for reel in candidate_reels:
        reel_id_str = str(reel.get("id") or reel.get("reelId") or "")
        reel_mood = (reel.get("mood") or "").lower()
        reel_cat = (reel.get("category") or "").lower()
        reel_loc = (reel.get("location") or "").lower()
        reel_caption = clean_text(reel.get("caption", ""))
        reel_tags = clean_text(reel.get("tags", ""))

        base_score = 50.0
        ai_match_reasons = []

        # 1. Speech / Talking Mood Alignment (Up to +50 pts)
        if dominant_speech_mood and detected_mood_scores.get(dominant_speech_mood, 0) > 0:
            if reel_mood == dominant_speech_mood or dominant_speech_mood in reel_tags or dominant_speech_mood in reel_caption:
                weight = detected_mood_scores[dominant_speech_mood] * 50.0
                base_score += weight
                ai_match_reasons.append(f"Matches your topic ({dominant_speech_mood.title()})")

        # 2. Historical User Preference Alignment (Up to +30 pts)
        if preferred_moods:
            for idx, p_mood in enumerate(preferred_moods):
                if reel_mood == p_mood.lower():
                    bonus = max(10.0, 30.0 - (idx * 6.0))
                    base_score += bonus
                    if not ai_match_reasons:
                        ai_match_reasons.append(f"Based on your {p_mood.title()} likes")
                    break

        # 3. Location Proximity (Up to +35 pts)
        loc_match_score = score_location_match(user_city, reel_loc)
        if loc_match_score > 0:
            base_score += 35.0
            ai_match_reasons.append(f"Trending in {user_city.title() or reel_loc.title()}")

        # 4. Anti-Duplicate Filter (-160 pts)
        if reel_id_str in seen_ids:
            base_score -= 160.0

        # 5. Social Popularity Factor (Up to +20 pts)
        likes = float(reel.get("likes") or 0)
        shares = float(reel.get("shares") or 0)
        base_score += min(15.0, likes / 3000.0) + min(10.0, shares / 500.0)

        # 6. TikTok Exploration Jitter (0-12 pts)
        import random
        base_score += random.uniform(0, 12.0)

        if not ai_match_reasons:
            ai_match_reasons.append("Trending Reel for you")

        scored_item = dict(reel)
        scored_item["_ai_score"] = round(base_score, 2)
        scored_item["_ai_reason"] = " • ".join(ai_match_reasons)
        scored_reels.append(scored_item)

    # Sort descending
    scored_reels.sort(key=lambda x: x.get("_ai_score", 0), reverse=True)
    return scored_reels


def main():
    """CLI / Subprocess entry point receiving JSON via stdin."""
    try:
        raw_input = sys.stdin.read().strip()
        if not raw_input:
            print(json.dumps({"success": False, "error": "No input provided"}))
            return

        payload = json.loads(raw_input)
        user_signals = payload.get("user_signals", {})
        candidate_reels = payload.get("candidate_reels", [])

        ranked = rank_reels_ai(user_signals, candidate_reels)

        output = {
            "success": True,
            "count": len(ranked),
            "data": ranked,
            "detected_mood": detect_speech_mood(user_signals.get("speech_text", ""))
        }
        print(json.dumps(output))
    except Exception as exc:
        print(json.dumps({"success": False, "error": str(exc)}))


if __name__ == "__main__":
    main()
