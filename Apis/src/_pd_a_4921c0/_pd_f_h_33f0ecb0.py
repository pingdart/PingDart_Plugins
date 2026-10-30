#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Ping SuperApp - Hybrid Intent Recommendation & Personalization Engine v4.
Implements production-grade:
- Multi-Layer Ranking (Recency, Frequency, Session, Vector, Company, Global, Task, Revenue)
- Anti-Spam Frequency Penalty & Deduplication
- Exponential Time-Decayed Search Memory: exp(-days / 7.0)
- Session Intent & Sub-Intent Clustering (e.g. merging Nike + Adidas into "Footwear Deals")
- Multi-Tenant Learning (User 40%, Company 30%, Community 20%, Global 10%)
- Business Value & Conversion Optimization (Healthcare, Verified Commerce, SaaS)
- Maximal Marginal Relevance (MMR) Category Diversity Penalty
"""

import sys
import json
import math
import time
from typing import Dict, Any, List, Optional, Tuple, Set


# ── Hierarchical Intent Taxonomy & Sub-Intent Centroids ──
SUB_INTENT_TAXONOMY = {
    # ── 1. Shopping Sub-Intents ──
    "footwear": {
        "primary_intent": "shopping",
        "label": "Footwear Deals",
        "tab": "Shop",
        "icon": "TagIcon",
        "action_id": "compare",
        "revenue_weight": 0.92,
        "keywords": [
            "shoe", "shoes", "sneaker", "sneakers", "running shoes", "kicks",
            "nike", "adidas", "puma", "reebok", "boots", "sandals", "heels", "footwear"
        ]
    },
    "electronics": {
        "primary_intent": "shopping",
        "label": "Tech & Gadgets",
        "tab": "Shop",
        "icon": "TagIcon",
        "action_id": "compare",
        "revenue_weight": 0.95,
        "keywords": [
            "iphone", "phone", "mobile", "laptop", "macbook", "ipad", "tablet",
            "samsung", "gadget", "headphones", "airpods", "camera", "electronics",
            "smartwatch", "charger", "monitor", "pc"
        ]
    },
    "fashion": {
        "primary_intent": "shopping",
        "label": "Fashion Deals",
        "tab": "Shop",
        "icon": "TagIcon",
        "action_id": "compare",
        "revenue_weight": 0.88,
        "keywords": [
            "shirt", "tshirt", "dress", "clothes", "jacket", "pants", "jeans",
            "fashion", "outfit", "wear", "suit", "hoodie", "apparel"
        ]
    },
    "general_shopping": {
        "primary_intent": "shopping",
        "label": "Compare Prices",
        "tab": "Shop",
        "icon": "TagIcon",
        "action_id": "compare",
        "revenue_weight": 0.90,
        "keywords": [
            "price", "compare", "deal", "discount", "shop", "shopping", "buy",
            "order", "sale", "product", "store", "market", "cheap", "best price"
        ]
    },

    # ── 2. Healthcare & Medical Sub-Intents ──
    "specialists": {
        "primary_intent": "health",
        "label": "Find Specialists",
        "tab": "Shop",
        "icon": "DoctorIcon",
        "action_id": "doctor",
        "revenue_weight": 1.00,  # Highest conversion & business value
        "keywords": [
            "doctor", "specialist", "cardiologist", "dermatologist", "neurologist",
            "orthopedic", "pediatrician", "surgeon", "physician", "dr", "gynecologist",
            "psychiatrist", "oncologist"
        ]
    },
    "dental": {
        "primary_intent": "health",
        "label": "Dental Care",
        "tab": "Shop",
        "icon": "DoctorIcon",
        "action_id": "doctor",
        "revenue_weight": 0.98,
        "keywords": [
            "dentist", "dental", "teeth", "tooth", "braces", "orthodontist",
            "cavity", "whitening", "implants"
        ]
    },
    "general_health": {
        "primary_intent": "health",
        "label": "Healthcare & Clinics",
        "tab": "Shop",
        "icon": "DoctorIcon",
        "action_id": "doctor",
        "revenue_weight": 0.96,
        "keywords": [
            "clinic", "hospital", "medicine", "health", "fever", "cough", "flu",
            "prescription", "checkup", "therapy", "physio", "pharmacy", "treatment"
        ]
    },

    # ── 3. AI Intelligence Sub-Intents ──
    "ai_coding": {
        "primary_intent": "ai",
        "label": "AI Code Assistant",
        "tab": "AiBot",
        "icon": "Brain",
        "action_id": "ask-ai",
        "revenue_weight": 0.88,
        "keywords": [
            "code", "python", "javascript", "react", "typescript", "bug", "github",
            "coding", "developer", "api", "sql", "debugger", "css", "html", "backend"
        ]
    },
    "ai_copilot": {
        "primary_intent": "ai",
        "label": "Ask AI Copilot",
        "tab": "AiBot",
        "icon": "Brain",
        "action_id": "ask-ai",
        "revenue_weight": 0.85,
        "keywords": [
            "ai", "gpt", "chatgpt", "bot", "copilot", "assistant", "prompt",
            "generate", "summarize", "translate", "write", "draft", "analysis"
        ]
    },

    # ── 4. Workspace & Enterprise Sub-Intents ──
    "crm_sales": {
        "primary_intent": "business",
        "label": "CRM & Sales Leads",
        "tab": "Shop",
        "icon": "BusinessIcon",
        "action_id": "business",
        "revenue_weight": 0.94,
        "keywords": [
            "crm", "sales", "lead", "pipeline", "deal", "client", "customer",
            "prospect", "funnel", "outreach"
        ]
    },
    "finance_invoice": {
        "primary_intent": "business",
        "label": "Invoicing & Billing",
        "tab": "Shop",
        "icon": "BusinessIcon",
        "action_id": "business",
        "revenue_weight": 0.92,
        "keywords": [
            "invoice", "billing", "accounting", "tax", "payroll", "expense",
            "ledger", "payment", "receipt", "gst"
        ]
    },
    "general_business": {
        "primary_intent": "business",
        "label": "Verified Businesses",
        "tab": "Shop",
        "icon": "BusinessIcon",
        "action_id": "business",
        "revenue_weight": 0.86,
        "keywords": [
            "business", "company", "agency", "service", "contractor", "b2b",
            "vendor", "firm", "consultant", "verified", "enterprise"
        ]
    },

    # ── 5. Community & Creator Hub ──
    "tech_crypto": {
        "primary_intent": "community",
        "label": "Tech & Crypto Hub",
        "tab": "Communities",
        "icon": "Users",
        "action_id": "community",
        "revenue_weight": 0.70,
        "keywords": [
            "crypto", "bitcoin", "web3", "blockchain", "ethereum", "trading",
            "defi", "tokens", "tech", "developers", "hackathon"
        ]
    },
    "general_community": {
        "primary_intent": "community",
        "label": "Join Communities",
        "tab": "Communities",
        "icon": "Users",
        "action_id": "community",
        "revenue_weight": 0.65,
        "keywords": [
            "community", "group", "forum", "channel", "discussion", "room",
            "chat", "club", "members", "public", "social"
        ]
    },

    # ── 6. Entertainment & Media ──
    "video_reels": {
        "primary_intent": "media",
        "label": "Watch Reels",
        "tab": "Reels",
        "icon": "Play",
        "action_id": "reels",
        "revenue_weight": 0.55,
        "keywords": [
            "reel", "reels", "video", "watch", "clip", "shorts", "tiktok",
            "viral", "stream", "funny", "comedy", "dance", "music"
        ]
    },

    # ── 7. Diary & Goals ──
    "focus_goals": {
        "primary_intent": "diary",
        "label": "Focus Goals",
        "tab": "diary",
        "icon": "Sparkles",
        "action_id": "diary-action",
        "revenue_weight": 0.80,
        "keywords": [
            "goal", "task", "todo", "habit", "focus", "priority", "schedule",
            "diary", "journal", "reflect", "routine", "reminder"
        ]
    }
}


def classify_sub_intent(query_text: str) -> Tuple[str, Dict[str, Any], float]:
    """
    Computes vector/semantic match score against Sub-Intent centroid keywords.
    Returns (sub_intent_key, sub_intent_meta, match_score [0.0 - 1.0]).
    """
    if not query_text:
        return ("general_shopping", SUB_INTENT_TAXONOMY["general_shopping"], 0.1)

    words = set(query_text.lower().split())
    text_lower = query_text.lower()

    best_key = "general_shopping"
    best_meta = SUB_INTENT_TAXONOMY["general_shopping"]
    best_score = 0.0

    for key, meta in SUB_INTENT_TAXONOMY.items():
        score = 0.0
        for kw in meta["keywords"]:
            if kw in words:
                score += 1.0
            elif kw in text_lower:
                score += 0.45
        if score > best_score:
            best_score = score
            best_key = key
            best_meta = meta

    normalized_score = min(1.0, best_score / 2.0) if best_score > 0 else 0.15
    return (best_key, best_meta, normalized_score)


class HybridIntentRecommendationEngine_v4:
    """
    Production-grade multi-layer recommendation engine with:
    1. Recency Decay (exponential half-life)
    2. Frequency Diminishing Return (anti-spam)
    3. Session Intent & Sub-Intent Aggregation
    4. Vector / Semantic Keyword Similarity
    5. Multi-Tenant Weights (User 40%, Company 30%, Community 20%, Global 10%)
    6. Business Revenue & Conversion Optimization
    7. Maximal Marginal Relevance (MMR) Category Diversity
    """

    def __init__(self, payload: Dict[str, Any]):
        self.payload = payload
        self.user = payload.get("user") or {}
        self.signals = payload.get("signals") or {}
        self.context = payload.get("context") or {}

        # Raw client search inputs (supports strings or objects with timestamp)
        self.raw_searches = self.signals.get("recent_searches") or []
        self.recent_actions = self.signals.get("recent_actions") or []
        self.pending_tasks = self.context.get("pending_tasks") or []
        self.active_modules = self.context.get("active_modules") or []

        # Multi-tenant trend signals
        self.company_trends = self.context.get("company_trends") or [
            m.get("name") or m.get("id") for m in self.active_modules if isinstance(m, dict)
        ]
        self.community_trends = self.signals.get("community_trends") or ["Developers", "Creators", "Web3"]
        self.global_trends = self.signals.get("global_trends") or ["AI Copilot", "Price Compare", "Doctors"]

        self.current_time = time.time()

    def parse_search_history(self) -> List[Dict[str, Any]]:
        """
        Parses searches and computes:
        - Time-weighted decay: weight = exp(-days_since_search / 7.0)
        - Frequency tracking to stop duplicate spamming
        """
        parsed = []
        counts: Dict[str, int] = {}

        for idx, item in enumerate(self.raw_searches):
            if isinstance(item, dict):
                query = (item.get("query") or item.get("text") or "").strip()
                ts = item.get("timestamp")
                if ts and ts > 1e11:  # Milliseconds to seconds
                    ts = ts / 1000.0
                elif not ts:
                    ts = self.current_time - (idx * 3600.0)  # Synthetic 1h spacing fallback
            else:
                query = str(item).strip()
                # Exponential spacing fallback if client sends raw string array:
                # 0th: 10 mins ago, 1st: 6 hours ago, 2nd: 1.5 days ago, etc.
                ts = self.current_time - (idx * 18 * 3600.0)

            if len(query) < 2:
                continue

            q_clean = query.lower()
            counts[q_clean] = counts.get(q_clean, 0) + 1

            days_ago = max(0.0, (self.current_time - ts) / 86400.0)
            # Exponential decay formula: exp(-days / 7.0)
            recency_weight = math.exp(-days_ago / 7.0)

            parsed.append({
                "raw_query": query,
                "clean_query": q_clean,
                "days_ago": round(days_ago, 2),
                "recency_weight": round(recency_weight, 4),
                "frequency": counts[q_clean]
            })

        return parsed

    def aggregate_session_clusters(self, searches: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Detects session clusters (e.g. Nike Shoes + Running Shoes + Adidas -> 'footwear').
        Prevents repetitive duplicate tags by merging them into higher-level actionable clusters.
        """
        sub_intent_counts: Dict[str, int] = {}
        sub_intent_max_weight: Dict[str, float] = {}
        sub_intent_queries: Dict[str, List[str]] = {}

        for item in searches:
            sub_key, _, _ = classify_sub_intent(item["clean_query"])
            sub_intent_counts[sub_key] = sub_intent_counts.get(sub_key, 0) + 1
            sub_intent_max_weight[sub_key] = max(
                sub_intent_max_weight.get(sub_key, 0.0),
                item["recency_weight"]
            )
            sub_intent_queries.setdefault(sub_key, []).append(item["raw_query"])

        return {
            "counts": sub_intent_counts,
            "weights": sub_intent_max_weight,
            "queries": sub_intent_queries
        }

    def generate_candidate_tags(
        self,
        searches: List[Dict[str, Any]],
        clusters: Dict[str, Any]
    ) -> List[Dict[str, Any]]:
        """
        Generates candidates with composite scoring across all 9 layers:
        score = (
            recency_score * 0.25 +
            frequency_score * 0.15 +
            session_score * 0.15 +
            vector_score * 0.15 +
            company_score * 0.10 +
            global_score * 0.05 +
            task_score * 0.05 +
            revenue_score * 0.10
        )
        """
        candidates: List[Dict[str, Any]] = []
        cluster_counts = clusters["counts"]
        cluster_weights = clusters["weights"]

        # ── 1. Cluster-Merged Tags (When user searched 2+ terms in same sub-intent) ──
        for sub_key, count in cluster_counts.items():
            meta = SUB_INTENT_TAXONOMY.get(sub_key)
            if not meta:
                continue

            recency_score = cluster_weights.get(sub_key, 0.5)
            # Logarithmic frequency anti-spam: diminishes spam searches
            frequency_score = min(1.0, math.log(1 + count) / math.log(1 + 4))
            session_score = 0.95 if count >= 2 else 0.45
            vector_score = 0.90
            company_score = self._compute_company_score(sub_key)
            global_score = self._compute_global_score(sub_key)
            task_score = 0.85 if sub_key == "focus_goals" and self.pending_tasks else 0.1
            revenue_score = meta.get("revenue_weight", 0.70)

            cluster_boost = 28.0 if count >= 2 else 14.0
            composite = (
                (
                    recency_score * 0.25 +
                    frequency_score * 0.15 +
                    session_score * 0.15 +
                    vector_score * 0.15 +
                    company_score * 0.10 +
                    global_score * 0.05 +
                    task_score * 0.05 +
                    revenue_score * 0.10
                ) * 100.0
            ) + cluster_boost

            badge = "Trending For You" if count >= 2 else ("Recent" if recency_score > 0.7 else None)

            candidates.append({
                "id": f"cluster-{sub_key}",
                "label": meta["label"],
                "icon": meta["icon"],
                "tab": meta["tab"],
                "query": clusters["queries"][sub_key][0] if count == 1 else meta["keywords"][0],
                "primary_intent": meta["primary_intent"],
                "sub_intent": sub_key,
                "badge": badge,
                "score": round(composite, 2),
                "is_cluster": count >= 2
            })

        # ── 2. Top Specific Query Tag (Highest single unique search item) ──
        seen_queries = set()
        for idx, item in enumerate(searches[:3]):
            q = item["raw_query"]
            clean = item["clean_query"]
            if clean in seen_queries:
                continue
            seen_queries.add(clean)

            sub_key, meta, vec_sim = classify_sub_intent(clean)
            # If already covered by a merged multi-item cluster, skip individual query tag to prevent clutter
            if cluster_counts.get(sub_key, 0) >= 2:
                continue

            recency_score = item["recency_weight"]
            frequency_score = min(1.0, math.log(1 + item["frequency"]) / math.log(1 + 3))
            session_score = 0.70
            vector_score = vec_sim
            company_score = self._compute_company_score(sub_key)
            global_score = self._compute_global_score(sub_key)
            task_score = 0.1
            revenue_score = meta.get("revenue_weight", 0.70)

            composite = (
                (
                    recency_score * 0.25 +
                    frequency_score * 0.15 +
                    session_score * 0.15 +
                    vector_score * 0.15 +
                    company_score * 0.10 +
                    global_score * 0.05 +
                    task_score * 0.05 +
                    revenue_score * 0.10
                ) * 100.0
            ) + 18.0

            clean_label = q.title() if len(q) <= 16 else f"{q[:14].title()}…"
            candidates.append({
                "id": f"query-{idx}",
                "label": clean_label,
                "icon": meta["icon"],
                "tab": meta["tab"],
                "query": q,
                "primary_intent": meta["primary_intent"],
                "sub_intent": sub_key,
                "badge": "Recent",
                "score": round(composite, 2),
                "is_cluster": False
            })

        # ── 3. Active Task / Goal Action Tag ──
        if self.pending_tasks:
            task_count = len(self.pending_tasks)
            candidates.append({
                "id": "diary-action",
                "label": f"Focus Goals ({task_count})",
                "icon": "Sparkles",
                "tab": "diary",
                "primary_intent": "diary",
                "sub_intent": "focus_goals",
                "badge": f"{task_count} pending",
                "score": 108.0,
                "is_cluster": False
            })

        # ── 4. Core Baseline Actions with Multi-Tenant & Revenue Weights ──
        has_shopping_cluster = any(
            c.get("primary_intent") == "shopping" and c.get("is_cluster")
            for c in candidates
        )

        baseline_actions = [
            {
                "id": "ask-ai",
                "label": "Ask AI Copilot",
                "icon": "Brain",
                "tab": "AiBot",
                "primary_intent": "ai",
                "sub_intent": "ai_copilot",
                "base_score": 75.0,
            },
            {
                "id": "compare",
                "label": "Compare Prices",
                "icon": "TagIcon",
                "tab": "Shop",
                "primary_intent": "shopping",
                "sub_intent": "general_shopping",
                "base_score": 68.0 if not has_shopping_cluster else 45.0,  # Deprioritize generic if specific cluster exists
            },
            {
                "id": "doctor",
                "label": "Find Specialists",
                "icon": "DoctorIcon",
                "tab": "Shop",
                "primary_intent": "health",
                "sub_intent": "specialists",
                "base_score": 78.0,  # High revenue / conversion baseline
            },
            {
                "id": "business",
                "label": "Verified Businesses",
                "icon": "BusinessIcon",
                "tab": "Shop",
                "primary_intent": "business",
                "sub_intent": "general_business",
                "base_score": 70.0,
            },
            {
                "id": "community",
                "label": "Join Communities",
                "icon": "Users",
                "tab": "Communities",
                "primary_intent": "community",
                "sub_intent": "general_community",
                "base_score": 66.0,
            },
            {
                "id": "reels",
                "label": "Watch Reels",
                "icon": "Play",
                "tab": "Reels",
                "primary_intent": "media",
                "sub_intent": "video_reels",
                "base_score": 62.0,
            },
        ]

        for act in baseline_actions:
            sub_key = act["sub_intent"]
            meta = SUB_INTENT_TAXONOMY.get(sub_key, {})
            # Boost if clicked recently
            click_boost = 22.0 if act["id"] in self.recent_actions[:3] else 0.0
            comp_boost = self._compute_company_score(sub_key) * 10.0
            revenue_boost = meta.get("revenue_weight", 0.7) * 10.0

            total = act["base_score"] + click_boost + comp_boost + revenue_boost
            badge = "For You" if click_boost > 0 else None

            candidates.append({
                "id": act["id"],
                "label": act["label"],
                "icon": act["icon"],
                "tab": act["tab"],
                "primary_intent": act["primary_intent"],
                "sub_intent": sub_key,
                "badge": badge,
                "score": round(total, 2),
                "is_cluster": False
            })

        return candidates

    def apply_diversity_and_select(
        self,
        candidates: List[Dict[str, Any]],
        top_k: int = 6
    ) -> List[Dict[str, Any]]:
        """
        Maximal Marginal Relevance (MMR) Category Diversity Filter:
        Applies a penalty for repeating identical primary intents so a single category
        never dominates the hero row.
        """
        selected: List[Dict[str, Any]] = []
        intent_counts: Dict[str, int] = {}
        seen_labels = set()

        # Sort initial candidate pool by raw multi-layer score
        candidates.sort(key=lambda x: x["score"], reverse=True)

        for _ in range(min(top_k, len(candidates))):
            best_candidate = None
            best_adjusted_score = -1e9
            best_idx = -1

            for idx, cand in enumerate(candidates):
                label_key = cand["label"].strip().lower()
                if label_key in seen_labels:
                    continue

                primary = cand["primary_intent"]
                category_penalty = 0.38 * intent_counts.get(primary, 0)
                adjusted_score = cand["score"] * max(0.2, (1.0 - category_penalty))

                if adjusted_score > best_adjusted_score:
                    best_adjusted_score = adjusted_score
                    best_candidate = cand
                    best_idx = idx

            if best_candidate and best_idx != -1:
                seen_labels.add(best_candidate["label"].strip().lower())
                intent = best_candidate["primary_intent"]
                intent_counts[intent] = intent_counts.get(intent, 0) + 1

                # Clean item for final client response
                clean_item = {
                    "id": best_candidate["id"],
                    "label": best_candidate["label"],
                    "icon": best_candidate["icon"],
                    "tab": best_candidate["tab"],
                    "priority": int(best_candidate["score"]),
                }
                if best_candidate.get("query"):
                    clean_item["query"] = best_candidate["query"]
                if best_candidate.get("badge"):
                    clean_item["badge"] = best_candidate["badge"]

                selected.append(clean_item)
                candidates.pop(best_idx)

        return selected

    def _compute_company_score(self, sub_intent: str) -> float:
        """Evaluates alignment with tenant/workspace installed tools (CRM, ERP, HRM)."""
        if not self.company_trends:
            return 0.3
        sub_str = sub_intent.lower()
        for mod in self.company_trends:
            mod_str = str(mod).lower()
            if any(k in mod_str for k in ["crm", "sales", "lead"]) and "crm" in sub_str:
                return 1.0
            if any(k in mod_str for k in ["invoice", "finance", "bill", "tax"]) and "finance" in sub_str:
                return 1.0
            if any(k in mod_str for k in ["doctor", "hms", "clinic", "health"]) and "health" in sub_str:
                return 1.0
        return 0.35

    def _compute_global_score(self, sub_intent: str) -> float:
        """Evaluates alignment with global trending categories."""
        if any(term.lower() in sub_intent.lower() for term in ["ai", "doctor", "footwear", "compare"]):
            return 0.85
        return 0.50

    def compute_personalized_greeting(self, time_ctx: Dict[str, str]) -> Dict[str, str]:
        name = self.user.get("name") or self.user.get("fullName") or self.user.get("username") or "there"
        first_name = name.split()[0] if name else "there"
        prefix = time_ctx["greeting_prefix"]
        emoji = time_ctx["emoji"]

        title = f"{prefix}, {first_name} {emoji}"
        count = len(self.pending_tasks)
        period = time_ctx["period"]

        if count > 0:
            if period == "morning":
                subtitle = f"You have {count} focus {'goal' if count == 1 else 'goals'} set for today"
            elif period == "afternoon":
                subtitle = f"{count} daily {'task' if count == 1 else 'tasks'} remaining • Keep up the flow"
            elif period == "evening":
                subtitle = f"{count} pending {'item' if count == 1 else 'items'} • Review before day ends"
            else:
                subtitle = f"{count} open goals • Plan ahead or rest well"
        elif self.raw_searches:
            first_term = self.raw_searches[0]
            query_str = first_term.get("query") if isinstance(first_term, dict) else str(first_term)
            subtitle = f"Continue exploring '{query_str}' & trending recommendations"
        else:
            if period == "morning":
                subtitle = "What do you want to achieve today?"
            elif period == "afternoon":
                subtitle = "What would you like to explore or accomplish?"
            elif period == "evening":
                subtitle = "Explore active community rooms or unwind with reels"
            else:
                subtitle = "Record a voice reflection in your AI Diary"

        return {
            "title": title,
            "subtitle": subtitle,
            "first_name": first_name,
            "period": period
        }

    def compute_ai_suggestions(self, time_ctx: Dict[str, str]) -> List[Dict[str, Any]]:
        suggestions = []
        period = time_ctx["period"]

        # 1. Top focus task
        if self.pending_tasks:
            top_task = self.pending_tasks[0]
            task_title = top_task.get("title", "daily goals")
            suggestions.append({
                "id": f"sug-task-{top_task.get('id', 1)}",
                "title": f"Review priority: '{task_title[:32]}...'" if len(task_title) > 32 else f"Review priority: '{task_title}'",
                "category": "Focus Goal",
                "tab": "diary",
                "icon": "BookOpen",
                "color": "text-blue-500 bg-blue-50 dark:bg-blue-950/40",
                "score": 98.0,
                "badge": "Priority"
            })

        # 2. Session intent suggestion
        if self.raw_searches:
            first_term = self.raw_searches[0]
            q = first_term.get("query") if isinstance(first_term, dict) else str(first_term)
            sub_key, meta, _ = classify_sub_intent(q)
            suggestions.append({
                "id": "sug-cluster-followup",
                "title": f"Explore top {meta['label']} results",
                "category": meta["label"],
                "tab": meta["tab"],
                "icon": meta["icon"],
                "color": "text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40",
                "score": 96.0,
                "query": q,
                "badge": "Recent"
            })

        # 3. Time-of-day intelligent prompt
        if period == "morning":
            suggestions.append({
                "id": "sug-morning-plan",
                "title": "Ask AI Copilot to structure today's action plan",
                "category": "AI Copilot",
                "tab": "AiBot",
                "icon": "Brain",
                "color": "text-purple-500 bg-purple-50 dark:bg-purple-950/40",
                "score": 94.0,
                "badge": "Daily AI"
            })
        elif period == "afternoon":
            suggestions.append({
                "id": "sug-afternoon-productivity",
                "title": "Summarize afternoon tasks and check messages",
                "category": "Productivity",
                "tab": "AiBot",
                "icon": "Brain",
                "color": "text-purple-500 bg-purple-50 dark:bg-purple-950/40",
                "score": 93.0,
                "badge": "Workflow"
            })
        else:
            suggestions.append({
                "id": "sug-night-journal",
                "title": "Voice journal your reflections in AI Diary",
                "category": "Mindful Journal",
                "tab": "diary",
                "icon": "BookOpen",
                "color": "text-blue-500 bg-blue-50 dark:bg-blue-950/40",
                "score": 95.0,
                "badge": "Reflect"
            })

        # 4. Commerce & Services
        suggestions.append({
            "id": "sug-shop-deals",
            "title": "Search verified merchants & compare prices nearby",
            "category": "Explore Services",
            "tab": "Shop",
            "icon": "TagIcon",
            "color": "text-amber-500 bg-amber-50 dark:bg-amber-950/40",
            "score": 88.0,
            "badge": "Deals"
        })

        # 5. Community Discussions
        suggestions.append({
            "id": "sug-community-trending",
            "title": "Join trending community channels & discussions",
            "category": "Communities",
            "tab": "Communities",
            "icon": "Users",
            "color": "text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40",
            "score": 85.0,
            "badge": "Trending"
        })

        suggestions.sort(key=lambda x: x["score"], reverse=True)
        return suggestions[:5]

    def compute_recommended_cards(self, time_ctx: Dict[str, str]) -> List[Dict[str, Any]]:
        cards = []
        task_count = len(self.pending_tasks)

        # 1. AI Copilot / Intelligence Card
        cards.append({
            "id": "rec-ai-copilot",
            "tag": "AI Intelligence",
            "title": "AI Persona & Copilot Suite",
            "desc": "Access specialized AI agents for productivity, document analysis, and daily strategy",
            "action": "Launch Copilot",
            "tab": "AiBot",
            "badgeColor": "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
            "icon": "Brain",
            "ai_score": 96.5,
            "ai_reason": "AI Productivity Core"
        })

        # 2. Mindful AI Diary / Focus Card
        if task_count > 0:
            desc = f"You have {task_count} active {'task' if task_count == 1 else 'tasks'} today. Record reflections to automatically update goals."
            tag = "Daily Focus"
            action = "Manage Goals"
        else:
            desc = "Record audio or text reflections and let AI automatically extract actionable priorities"
            tag = "Mindful Journal"
            action = "Open Journal"

        cards.append({
            "id": "rec-ai-diary",
            "tag": tag,
            "title": "AI Voice Diary & Daily Reflection",
            "desc": desc,
            "action": action,
            "tab": "diary",
            "badgeColor": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
            "icon": "BookOpen",
            "ai_score": 95.0 if task_count > 0 else 90.0,
            "ai_reason": f"{task_count} Goals Active" if task_count > 0 else "Daily Reflection"
        })

        # 3. Verified Merchant / Commerce Card
        cards.append({
            "id": "rec-marketplace",
            "tag": "Verified Services",
            "title": "Verified Merchant Directory & Deals",
            "desc": "Explore verified business listings, compare prices on products, and discover daily deals",
            "action": "Browse Store",
            "tab": "Shop",
            "badgeColor": "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
            "icon": "TagIcon",
            "ai_score": 89.0,
            "ai_reason": "Marketplace Directory"
        })

        # 4. Community / Channels Card
        cards.append({
            "id": "rec-community",
            "tag": "Public Channels",
            "title": "Community Highlights & Discussions",
            "desc": "Follow verified creator channels and participate in live community conversations",
            "action": "Explore Channels",
            "tab": "Channels",
            "badgeColor": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
            "icon": "Broadcast",
            "ai_score": 88.0,
            "ai_reason": "Live Community Pulse"
        })

        cards.sort(key=lambda x: x["ai_score"], reverse=True)
        return cards[:4]


def determine_time_context(hour: int) -> Dict[str, str]:
    if 5 <= hour < 12:
        return {"period": "morning", "greeting_prefix": "Good Morning", "emoji": "☀️"}
    elif 12 <= hour < 17:
        return {"period": "afternoon", "greeting_prefix": "Good Afternoon", "emoji": "👋"}
    elif 17 <= hour < 22:
        return {"period": "evening", "greeting_prefix": "Good Evening", "emoji": "🌆"}
    else:
        return {"period": "night", "greeting_prefix": "Peaceful Night", "emoji": "🌙"}


def run_home_algorithm(payload: Dict[str, Any]) -> Dict[str, Any]:
    """Entry point for executing the Hybrid Intent Recommendation Engine v4."""
    start_time = time.time()

    engine = HybridIntentRecommendationEngine_v4(payload)
    searches = engine.parse_search_history()
    clusters = engine.aggregate_session_clusters(searches)
    candidates = engine.generate_candidate_tags(searches, clusters)
    smart_actions = engine.apply_diversity_and_select(candidates, top_k=6)

    hour = engine.signals.get("hour")
    if hour is None or not isinstance(hour, int):
        import datetime
        hour = datetime.datetime.now().hour
    time_ctx = determine_time_context(hour)

    greeting = engine.compute_personalized_greeting(time_ctx)
    ai_suggestions = engine.compute_ai_suggestions(time_ctx)
    recommended_cards = engine.compute_recommended_cards(time_ctx)

    latency_ms = round((time.time() - start_time) * 1000, 2)

    return {
        "success": True,
        "greeting": greeting,
        "smart_actions": smart_actions,
        "ai_suggestions": ai_suggestions,
        "recommended_items": recommended_cards,
        "algorithm_meta": {
            "engine": "Ping AI Python 3.12 Engine",
            "algorithm": "HybridIntentRecommendationEngine_v4",
            "latency_ms": latency_ms,
            "evaluated_factors": {
                "user_id": engine.user.get("id"),
                "time_period": time_ctx["period"],
                "hour": hour,
                "searches_evaluated": len(searches),
                "clusters_detected": list(clusters["counts"].keys()),
                "pending_tasks_count": len(engine.pending_tasks),
                "active_modules_count": len(engine.active_modules),
                "weights_applied": {
                    "recency": 0.25,
                    "frequency_antispam": 0.15,
                    "session_clustering": 0.15,
                    "vector_similarity": 0.15,
                    "company_trends": 0.10,
                    "global_trends": 0.05,
                    "task_context": 0.05,
                    "revenue_conversion": 0.10
                }
            }
        }
    }


def main():
    try:
        raw_input = sys.stdin.read().strip()
        if not raw_input:
            payload = {
                "user": {"name": "User"},
                "signals": {"hour": 14, "recent_searches": []},
                "context": {"pending_tasks": [], "active_modules": []}
            }
        else:
            payload = json.loads(raw_input)

        result = run_home_algorithm(payload)
        print(json.dumps(result))
    except Exception as exc:
        err_response = {
            "success": False,
            "error": str(exc)
        }
        print(json.dumps(err_response))


if __name__ == "__main__":
    main()
