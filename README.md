# Digital-Analog Style Clock

A modern, interactive web-based clock that combines the elegance of traditional analog design with dynamic digital-style animations. This unique timepiece features animated progress arcs, glowing orbital dots, and traditional clock hands, all synchronized to display real-time.

<div align="center">
    <img src="https://github.com/PriyanshuSahoo-PS98Tech/Digital-Analog-style-Clock/blob/main/output.png" alt="Live Demo" width="250">
</div>

## 📋 Table of Contents

- [Features](#-features)
- [Live Demo](#-live-demo)
- [Technologies Used](#️-technologies-used)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [How It Works](#-how-it-works)
  - [Arc Animation System](#arc-animation-system)
  - [Dot Rotation System](#dot-rotation-system)
  - [Traditional Needles](#traditional-needles)
- [Customization](#-customization)
  - [Color Themes](#color-themes)
  - [Animation Speed](#animation-speed)
  - [Size & Scale](#size--scale)
- [Unique Design Elements](#-unique-design-elements)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

- **Real-Time Updates**: Clock updates every second with smooth animations
- **Triple Arc System**: Animated progress rings for hours, minutes, and seconds
- **Glowing Orbital Dots**: Luminous indicators that rotate around each time ring
- **Traditional Needles**: Classic hour, minute, and second hands
- **Modern Dark Theme**: Sleek dark background with vibrant colored accents
- **Responsive Design**: Scales beautifully across different screen sizes
- **Smooth Animations**: CSS transitions create fluid, realistic movements
- **Color-Coded Time Units**:
  - 🔴 **Red**: Seconds (outer ring)
  - 🟡 **Yellow**: Minutes (middle ring)  
  - 🟢 **Green**: Hours (inner ring)

## 🚀 Live Demo

Experience the clock in action: [https://digital-analog-style-clock-ps98tech.netlify.app/](https://digital-analog-style-clock-ps98tech.netlify.app/)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and SVG graphics
- **CSS3**: Advanced styling, animations, and responsive design
- **JavaScript (ES6)**: Real-time calculations and DOM manipulation
- **SVG**: Scalable vector graphics for smooth arc animations

## 📁 Project Structure

```
Digital-Analog-Style-Clock/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Clock logic and updates
├── output.png          # Pic of the output
├── LICENSE             # License of this project
└── README.md           # Project documentation
```

## 🔧 Installation & Setup

### Option 1: Direct Download
1. Clone the repository:
   ```bash
   git clone https://github.com/PriyanshuSahoo-PS98Tech/Digital-Analog-style-Clock.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Digital-Analog-style-Clock
   ```
3. Open `index.html` in your web browser

### Option 2: Live Server (Recommended for Development)
1. Install a live server extension in your code editor
2. Open the project folder
3. Run the live server to see real-time changes

## 💡 How It Works

### Arc Animation System
The clock uses SVG circles with `stroke-dasharray` and `stroke-dashoffset` properties to create animated progress rings:

```javascript
// Hour arc calculation (adjusted with minutes for precision)
hh.style.strokeDashoffset = 510 - (510 * (h + m / 60)) / 12;

// Minute arc calculation  
mm.style.strokeDashoffset = 630 - (630 * m) / 60;

// Second arc calculation
ss.style.strokeDashoffset = 760 - (760 * s) / 60;
```

### Dot Rotation System
Glowing dots rotate around each ring using CSS transforms:

```javascript
// Precise rotation calculations
sec_dot.style.transform = `rotateZ(${s * 6}deg)`;          // 6°/second
min_dot.style.transform = `rotateZ(${m * 6}deg)`;          // 6°/minute  
hr_dot.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`; // 30°/hour + 0.5°/minute
```

### Traditional Needles
Classic clock hands provide familiar analog readability:

```javascript
// Needle rotations with smooth transitions
hr.style.transform = `rotateZ(${h * 30 + m * 0.5}deg)`;
mn.style.transform = `rotateZ(${m * 6 + s * 0.1}deg)`;     // +0.1°/sec for smoothness
sc.style.transform = `rotateZ(${s * 6}deg)`;
```

## 🎨 Customization

### Color Themes
Modify the CSS custom properties in `style.css`:
```css
.circle:nth-child(1) { --clr: #ff006e; } /* Seconds - Pink/Red */
.circle:nth-child(2) { --clr: #fb8500; } /* Minutes - Orange/Yellow */
.circle:nth-child(3) { --clr: #8ecae6; } /* Hours - Blue/Green */
```

### Animation Speed
Adjust the update interval in `script.js`:
```javascript
setInterval(() => {
    // Clock update logic
}, 1000); // Change 1000ms for different update rates
```

### Size & Scale
Modify the clock scale in `style.css`:
```css
.clock {
    scale: 2; /* Adjust this value */
    width: 280px;
    height: 280px;
}
```

## 🌟 Unique Design Elements

- **Concentric Arc System**: Three nested progress rings show time completion
- **Glowing Effects**: CSS box-shadow creates luminous dot indicators
- **Precision Timing**: Hour arc adjusts continuously based on minutes for accuracy
- **Smooth Transitions**: CSS transitions ensure fluid animations
- **Dark Aesthetic**: Modern dark theme with vibrant accent colors

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Priyanshu Sahoo**
- GitHub: [@PriyanshuSahoo-PS98Tech](https://github.com/PriyanshuSahoo-PS98Tech)
- Live Demo: [Digital Analog-Style Clock](https://digital-analog-style-clock-ps98tech.netlify.app/)

## 🙏 Acknowledgments

- Inspired by modern digital-analog clock concepts
- Built with vanilla web technologies for optimal performance
- Designed for both functionality and visual appeal

<div align="center">
   <b>⭐ Star this repository if you found it helpful!</b>
  <div align="center">
   <b>#PS98Tech</b>
</div>
</div>
