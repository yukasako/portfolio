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

techChart(`HTML`, 85);
techChart(`JavaScript`, 60);
techChart(`Git`, 50);

artChart("Drawing", 90);
artChart("ClipStudio", 85);
artChart("Figma", 70);

languageChart("Japanese", 100);
languageChart("English", 75);
languageChart("Swedish", 60);
