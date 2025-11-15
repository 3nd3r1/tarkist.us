# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TarkAI is an AI-powered CISO analysis tool built with FastAPI. The backend provides REST APIs for security assessments and reporting functionality.

## Development Commands

### Environment Setup
```bash
make setup          # Create virtual environment and install dev dependencies
make install        # Install production dependencies only
```

### Running the Application
```bash
make dev            # Start development server with auto-reload (localhost:8000)
```

### Testing
```bash
make test           # Run all tests with pytest
```

### Code Quality
```bash
make lint           # Run ruff linting, formatting checks, and mypy type checking
make format         # Format code with ruff
```

### Docker Commands
```bash
make docker-up      # Start services with docker compose
make docker-down    # Stop docker compose services  
make docker-logs    # Follow docker compose logs
```

## Project Architecture

### Directory Structure
- `app/` - Main application package
  - `main.py` - FastAPI application entry point with CORS middleware
  - `config.py` - Application configuration using Pydantic settings
  - `api/v1/` - API versioning structure
    - `routes.py` - Main router that combines all endpoint routers
    - `endpoints/` - Individual endpoint modules (health, assessments)
  - `agents/` - AI agent functionality with BaseAgent class and Jinja2 template system
    - `base.py` - Generic BaseAgent with input/output validation and LLM integration
    - `entity_resolution/` - Specific agent implementation with prompt templates
  - `llm/` - LLM provider abstraction layer
    - `base.py` - Abstract LLMProvider interface with generate() and generate_stream()
    - `factory.py` - Provider factory pattern
    - `providers/gemini.py` - Google Gemini integration
  - `schemas/` - Pydantic models for request/response validation
    - `assessment.py` - Assessment data models
    - `entity.py` - Entity resolution models
    - `vendor.py` - Vendor information models
  - `services/` - Business logic layer
  - `utils/` - Utility modules including colored logging configuration

### Key Technologies
- **FastAPI** - Web framework with automatic OpenAPI documentation
- **Pydantic** - Data validation and settings management with BaseSettings
- **Uvicorn** - ASGI server for development
- **Ruff** - Fast Python linter and formatter (v0.14.5)
- **MyPy** - Static type checking
- **Pytest** - Testing framework with async support
- **ColorLog** - Colored console logging
- **Jinja2** - Template engine for AI agent prompts
- **Google Gemini** - LLM provider integration

### Application Configuration
- Environment variables loaded via `python-dotenv`
- Settings managed through Pydantic BaseSettings in `config.py`
- API versioning with `/api/v1` prefix  
- Wide-open CORS policy for development
- Google Gemini LLM configuration via `GEMINI_API_KEY` and `GEMINI_MODEL` env vars

### Current API Endpoints
- `GET /` - Root endpoint with service info
- `GET /api/v1/health` - Health check
- Assessment endpoints under `/api/v1/assesments/`:
  - `POST` - Create assessment
  - `GET` - List assessments
  - `GET /{id}` - Get specific assessment
  - `GET /{id}/status` - Get assessment status
  - `DELETE /{id}` - Delete assessment
  - `PUT /{id}/report` - Generate assessment report
  - `PUT /{id}/report/export` - Export assessment report

## Development Notes

### Code Style
- Uses Ruff for linting and formatting (line length: 100 chars)
- MyPy for static type checking with relaxed settings for development
- Logging configured with colored output via ColorLog
- Python 3.11+ target version
- Import organization: known first-party package is `app`

### Agent Architecture
- **BaseAgent**: Generic agent class using type generics for input/output validation
- **LLM Integration**: Abstract LLMProvider interface supporting both sync and streaming generation
- **Template System**: Jinja2 templates for system/user prompts stored in agent subdirectories
- **Error Handling**: Custom exceptions for agent validation and processing errors
- **JSON Extraction**: Automatic parsing of LLM responses with markdown code block handling

### Testing Strategy
- Pytest with async support and asyncio mode auto-enabled
- pytest-cov for coverage reporting
- Test files should be placed in a `tests/` directory (not yet created)
- Async test support configured via pytest-asyncio

### Virtual Environment
- Uses Python venv in `venv/` directory
- All development commands run through the virtual environment via Makefile