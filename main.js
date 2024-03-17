//ふわっと
let targets = document.getElementsByClassName("fade");
for (let i = targets.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
        observer.unobserve(entries[j].target);
      }
    }
  });
  observer.observe(targets[i]);
}

let chart = (skill, percentage) => {
  let canvas = document.querySelector(`#${skill}`);
  canvas.id = "myChart";

  // Text inside the chart
  let chartText = {
    beforeDraw(chart) {
      let {
        ctx,
        chartArea: { top, width, height },
      } = chart;
      ctx.fillStyle = "black";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`HTML/CSS`, width / 2, top + height / 1.9);
    },
  };

  window.myChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["complete", "uncomplete"],
      datasets: [
        {
          label: `${skill}`,
          data: [percentage, 100 - percentage],
          borderWidth: 0,
          cutout: "85%",
          backgroundColor: ["rgb(0, 165, 191)", "rgb(178, 228, 236)"],
        },
      ],
    },
    options: {
      plugins: {
        legend: false,
        tooltip: false,
      },
      animation: {
        animateRotate: true,
      },
      responsive: true,
      tooltips: {
        enabled: false,
      },
    },
    plugins: [chartText],
  });
};

const ham = document.getElementById("hamburger");
const navLink = document.getElementById("navbar-links");

ham.addEventListener("click", () => {
  navLink.classList.toggle("displayNone");
});
navLink.addEventListener("click", () => {
  navLink.classList.toggle("displayNone");
});

let techChart = (skill, percentage) => {
  let canvas = document.querySelector(`#${skill}`);
  canvas.id = "myChart";

  // Text inside the chart
  let chartText = {
    beforeDraw(chart) {
      let {
        ctx,
        chartArea: { top, width, height },
      } = chart;
      ctx.fillStyle = "black";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${skill}`, width / 2, top + height / 1.9);
    },
  };

  window.myChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["complete", "uncomplete"],
      datasets: [
        {
          label: `${skill}`,
          data: [percentage, 100 - percentage],
          borderWidth: 0,
          cutout: "85%",
          backgroundColor: ["rgb(0, 165, 191)", "rgb(178, 228, 236)"],
        },
      ],
    },
    options: {
      plugins: {
        legend: false,
        tooltip: false,
      },
      animation: {
        animateRotate: true,
      },
      responsive: true,
      tooltips: {
        enabled: false,
      },
    },
    plugins: [chartText],
  });
};

let artChart = (skill, percentage) => {
  let canvas = document.querySelector(`#${skill}`);
  canvas.id = "myChart";

  // Text inside the chart
  let chartText = {
    beforeDraw(chart) {
      let {
        ctx,
        chartArea: { top, width, height },
      } = chart;
      ctx.fillStyle = "black";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${skill}`, width / 2, top + height / 1.9);
    },
  };

  window.myChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["complete", "uncomplete"],
      datasets: [
        {
          label: `${skill}`,
          data: [percentage, 100 - percentage],
          borderWidth: 0,
          cutout: "85%",
          backgroundColor: ["rgb(246, 144, 150)", "rgb(252, 221, 223)"],
        },
      ],
    },
    options: {
      plugins: {
        legend: false,
        tooltip: false,
      },
      animation: {
        animateRotate: true,
      },
      responsive: true,
      tooltips: {
        enabled: false,
      },
    },
    plugins: [chartText],
  });
};

let languageChart = (skill, percentage) => {
  let canvas = document.querySelector(`#${skill}`);
  canvas.id = "myChart";

  // Text inside the chart
  let chartText = {
    beforeDraw(chart) {
      let {
        ctx,
        chartArea: { top, width, height },
      } = chart;
      ctx.fillStyle = "black";
      ctx.font = "14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${skill}`, width / 2, top + height / 1.9);
    },
  };

  window.myChart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["complete", "uncomplete"],
      datasets: [
        {
          label: `${skill}`,
          data: [percentage, 100 - percentage],
          borderWidth: 0,
          cutout: "85%",
          backgroundColor: ["rgb(253, 216, 118)", "rgb(254, 243, 214)"],
        },
      ],
    },
    options: {
      plugins: {
        legend: false,
        tooltip: false,
      },
      animation: {
        animateRotate: true,
      },
      responsive: true,
      tooltips: {
        enabled: false,
      },
    },
    plugins: [chartText],
  });
};

chart(`HTML`, 85);
techChart(`JavaScript`, 60);
techChart(`Git`, 50);

artChart("Drawing", 90);
artChart("ClipStudio", 85);
artChart("Figma", 70);

languageChart("Japanese", 100);
languageChart("English", 75);
languageChart("Swedish", 60);

let show = 2; //最初に表示する件数
let num = 4; //clickごとに表示したい件数
let contents = ".timeline-list li"; // 対象のlist
$(contents + ":nth-child(n + " + (show + 1) + ")").addClass("is-hidden");
$(".more").on("click", function () {
  $(contents + ".is-hidden")
    .slice(0, num)
    .removeClass("is-hidden");
  if ($(contents + ".is-hidden").length == 0) {
    $(".more").fadeOut();
  }
});

// 画像領域を取得
let images = document.querySelector("#yasuragiImages");
// 「進む」関数
let next = () => {
  images.appendChild(images.children[0]);
};
// 「戻る」関数
let back = () => {
  images.insertBefore(
    images.children[images.children.length - 1],
    images.children[0]
  );
};
