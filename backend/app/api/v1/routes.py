from fastapi import APIRouter

from app.api.v1.endpoints import assessments, health

router = APIRouter()

router.include_router(health.router, tags=["health"])
router.include_router(assessments.router, prefix="/assessments", tags=["assessments"])
