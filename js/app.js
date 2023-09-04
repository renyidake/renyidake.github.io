/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/
/**    **/
/* Otherwise just put the config content (json): */

// 这段代码将在指定的 HTML 元素中创建一个漂亮的背景粒子效果。你可以根据需要进行修改和定制，比如调整粒子的数量、颜色、形状等，
// 以获得你想要的效果。如果你想要使用这个粒子背景效果，你需要在 HTML 中创建一个元素并给其一个 id，然后在这个 id 下应用这段代码。
particlesJS('particles-js',
// 这部分代码使用了 particlesJS 函数来初始化粒子效果，将效果应用于 id 为 "particles-js" 的 HTML 元素。
  {
    "particles": {
      "number": {
        "value": 10,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": .8,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
      // 这里定义了粒子效果的各种属性和样式。
      // number: 定义了粒子数量，密度等。
      // color: 定义了粒子的颜色。
      // shape: 定义了粒子的形状，包括圆形、多边形、图片等。
      // opacity: 定义了粒子的透明度。
      // size: 定义了粒子的大小。
      // line_linked: 定义了连接线的样式和属性。
      // move: 定义了粒子的移动方式和速度等
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
//       detect_on: 定义了检测交互的元素。
// events: 定义了不同事件下的交互行为，如悬停、点击、窗口调整等。
// modes: 定义了不同交互模式，如抓取、气泡、斥力等。
    },
    "retina_detect": true,
    // 定义了是否启用视网膜显示支持。
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
  // 定义了演示配置，包括卡片显示、背景颜色、背景图片等

);
