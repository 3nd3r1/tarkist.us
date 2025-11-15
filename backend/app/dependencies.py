from app.services.assessment import AssessmentService


def get_assessment_service() -> AssessmentService:
    return AssessmentService()
