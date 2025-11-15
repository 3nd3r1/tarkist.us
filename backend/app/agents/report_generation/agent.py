from pydantic import BaseModel

from app.agents.base import BaseAgent
from app.llm.base import LLMProvider


class ReportGenerationAgentRequest(BaseModel):
    """Request schema for report generation agent."""


class ReportGenerationAgentResponse(BaseModel):
    """Response schema for report generation agent."""


class ReportGenerationAgent(BaseAgent):
    input_model = ReportGenerationAgentRequest
    output_model = ReportGenerationAgentResponse

    def __init__(self, llm_provider: LLMProvider):
        super().__init__(llm_provider)

    async def execute(
        self, input_data: ReportGenerationAgentRequest
    ) -> ReportGenerationAgentResponse:
        return await super().execute(input_data)
