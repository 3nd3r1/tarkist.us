from pydantic import BaseModel

from app.agents.base import BaseAgent
from app.llm.base import LLMProvider


class AlternativesAnalysisAgentRequest(BaseModel):
    """Request schema for alternatives analysis agent."""


class AlternativesAnalysisAgentResponse(BaseModel):
    """Response schema for alternatives analysis agent."""


class AlternativesAnalysisAgent(BaseAgent):
    input_model = AlternativesAnalysisAgentRequest
    output_model = AlternativesAnalysisAgentResponse

    def __init__(self, llm_provider: LLMProvider):
        super().__init__(llm_provider)

    async def execute(
        self, input_data: AlternativesAnalysisAgentRequest
    ) -> AlternativesAnalysisAgentResponse:
        return await super().execute(input_data)
