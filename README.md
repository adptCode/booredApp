# BooredApp

BooredApp is an Angular application that suggests random activities when you're bored. It fetches suggestions using an external API and allows filtering by activity type.

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/adptCode/booredApp.git
cd booredApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the application

Run the project using the custom start script that includes CORS proxy configuration:

```bash
npm start
```

Open your browser and navigate to `http://localhost:4200/`.

### 4. Proxy Configuration

The project uses a proxy to handle CORS issues with the external API. This is automatically configured in the `npm start` script.

## API Information

BooredApp retrieves activities from the [Bored API](https://bored-api.appbrewery.com/). The API provides both random activities and the ability to filter activities by type.

- **API Base URL**: `https://bored-api.appbrewery.com`
- **Endpoints**:
  - `/random`: Fetches a random activity.
  - `/filter?type={type}`: Fetches activities filtered by type (e.g., recreational, social, education).

Example usage:

- Random activity: `https://bored-api.appbrewery.com/random`
- Filtered activity: `https://bored-api.appbrewery.com/filter?type=recreational`

## Tech Stack

- **Frontend**: Angular
- **Styles**: Bootstrap
- **Language**: TypeScript
- **Package Manager**: npm
- **API**: [Bored API](https://bored-api.appbrewery.com/)

## Scripts

- **Start**: `npm start` - Runs the application with the CORS proxy setup.
- **Build**: `ng build` - Builds the production version of the app.

## License

This project is licensed under the MIT License.

