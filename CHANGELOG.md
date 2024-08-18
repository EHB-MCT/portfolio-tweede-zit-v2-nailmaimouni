# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), 
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Feature or update pending release
- Bug fixes or improvements in progress

## [Version 0.1.1] - 2024-08-17
### Added
- Integration tests for the `/courses/:id` endpoint using Jest.
- CI/CD pipeline configuration using GitHub Actions for automated testing and deployment.
- Enhanced error handling for database connection issues.

### Fixed
- Resolved issue where the `/courses/:id` endpoint would not return the correct course information.
- Fixed Docker container networking issues that caused failed connections to PostgreSQL.

### Changed
- Refactored `app.js` to directly define routes without using `initEndpoints` function.

## [Version 0.1.0] - 2024-08-04
### Added
- Initial release of the Multimedia & Creative Technologies Courses API.
- Basic endpoint to return a welcome message.
- Endpoint to fetch all resources.
- Endpoint to create a new resource.
- PostgreSQL database integration with Docker.
- Initial database schema setup.

## [0.0.1] - 2024-07-30
### Added
- Project setup and initial commit.
- Added README.md, LICENSE, CODE_OF_CONDUCT.md, and CONTRIBUTING.md files.
- Docker configuration with docker-compose for the API and PostgreSQL.
