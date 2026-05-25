# Love Letters

A personal love letter website built with HTML, CSS, and JavaScript. This project is a digital collection of heartfelt messages, letters, and memories with an interactive interface.

## Features

- **Interactive Modal**: An engaging loading screen with customizable message
- **Tabbed Interface**: Organized content across multiple sections:
  - Welcome page with introduction
  - Special day memories
  - Read-me letters for different emotional states
  - Personal letters and diary entries
  - Real-time counter showing elapsed time
- **Navigation System**: Paginated content for easy browsing through multiple letters
- **Real-time Counter**: Dynamic calculation of time elapsed since a specific date
- **Responsive Design**: Clean, pixelated aesthetic with smooth transitions

## Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Google Fonts (Pixelify Sans)
- **Backend**: JSON Server for data management
- **Development Tools**: Live Server, Concurrently for parallel execution

## Project Structure

```
For-My_Love/
├── My-Love/                 # Main application directory
│   ├── index.html          # Main HTML file
│   ├── script.js           # JavaScript functionality
│   ├── style.css           # Main stylesheet
│   ├── style.scss          # SCSS source file
│   ├── style.css.map       # CSS source map
│   └── img/                # Image assets
│       └── image-removebg-preview.png
├── comentarios.json        # JSON data for comments/letters
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── LICENSE                 # MIT License
└── README.md               # Project documentation
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd For-My_Love
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development servers**
   ```bash
   npm start
   ```
   This command runs both the JSON server (port 3000) and live server (port 5500) concurrently.

## Available Scripts

- `npm run api` - Starts JSON server on port 3000
- `npm run dev` - Starts live server on port 5500
- `npm start` - Runs both servers concurrently

## Features Breakdown

### Modal System
- Interactive loading screen with customizable message
- Smooth transition to main content
- Close button functionality

### Tab Navigation
- Dynamic tab switching with smooth animations
- Active state management
- Content organization across different themes:
  - **Home**: Welcome page
  - **Memories**: Special day section
  - **Read Me**: Letters for different emotional states
  - **Letters**: Personal letters and diary entries
  - **Counter**: Real-time elapsed time display

### Letter Navigation
- Paginated letter browsing system
- Previous/Next navigation controls
- Active letter highlighting
- Responsive button generation

### Real-time Counter
- Calculates time elapsed since a configurable start date
- Updates every second with days, hours, minutes, and seconds
- Dynamic display formatting
- Default start date: January 1, 2024

## Customization

### Adding New Letters
1. Add new letter content to the appropriate section in `My-Love/index.html`
2. The navigation system will automatically detect new letters
3. Style adjustments can be made in `My-Love/style.css`

### Modifying the Counter
- Update the start date in the `updateDayCounter()` function in `My-Love/script.js`
- The date format is: `new Date(year, month-1, day, hour, minute, second)`
- Example: `new Date(2024, 0, 1, 0, 0, 0)` for January 1, 2024
- Update the display text in `My-Love/index.html` to match the new date

### Styling Changes
- Main styles are in `My-Love/style.css`
- SCSS source file available at `My-Love/style.scss` for advanced styling
- Color variables can be modified in the CSS custom properties
- Font: Pixelify Sans (Google Fonts)

## Browser Support

- Modern browsers supporting ES6+ features
- CSS Grid and Flexbox support required
- JavaScript enabled

## Development Notes

- The project uses a pixelated design aesthetic
- Content is customizable and can be adapted for different purposes
- JSON server provides mock API functionality for development
- All personal content has been replaced with placeholder text (lorem ipsum)

## Data Structure

The `comentarios.json` file contains the data structure for comments/letters:

```json
{
  "comentarios": [
    {
      "id": "unique-id",
      "trechoId": "section-id",
      "texto": "text content",
      "comentario": "comment content"
    }
  ]
}
```

## License

MIT License - See LICENSE file for details

## Author

Julia Rebouças Leite

---

*This project can be customized for personal use or as a template for similar applications.*
