from pydantic import BaseModel

from app.agents.base import BaseAgent
from app.llm.base import LLMProvider


class ComplianceAnalysisAgentRequest(BaseModel):
    """Request schema for compliance analysis agent."""


class ComplianceAnalysisAgentResponse(BaseModel):
    """Response schema for compliance analysis agent."""


class ComplianceAnalysisAgent(BaseAgent):
    input_model = ComplianceAnalysisAgentRequest
    output_model = ComplianceAnalysisAgentResponse

    def __init__(self, llm_provider: LLMProvider):
        super().__init__(llm_provider)

    async def execute(
        self, input_data: ComplianceAnalysisAgentRequest
    ) -> ComplianceAnalysisAgentResponse:
        return await super().execute(input_data)
