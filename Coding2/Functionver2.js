function initViz() {
  var url =
      "https://public.tableau.com/views/SuicideRate_16395450141050/SuicideMap?:language=en-US&:display_count=n&:origin=viz_share_link",
    vizDiv = document.getElementById("myViz"),
    options = {
      hideTabs: true,
      hideToolbar: false,
      width: "100%",
      height: "650px",
      onFirstInteractive: function () {
        console.log("Run this code");
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log(activeSheet.getName());
        //  document.getElementById("vizTitle").innerHTML = activeSheet.getName();
      },
    };
  viz = new tableau.Viz(vizDiv, url, options);
}

function switchView(sheetName) {
  var workbook = viz.getWorkbook();
  workbook.activateSheetAsync(sheetName);
  activeSheet = workbook.getActiveSheet();
  document.getElementById("vizTitle").innerHTML = sheetName;
  console.log("changed " + sheetName);
}

function showAction(chartname) {
  console.log("it can be shown here");
  if (chartname == "Home") {
    document.getElementById("HomeDesc").style.display = "block";
    document.getElementById("BANSDesc").style.display = "none";
    document.getElementById("DumbbellDesc").style.display = "none";
    document.getElementById("StackedDesc").style.display = "none";
    document.getElementById("BumpChartDesc").style.display = "none";
    document.getElementById("LollipopDesc").style.display = "none";
    document.getElementById("ActionButtons").style.display = "none";
    document.getElementById("SelectWithinCountry").style.display = "none";
    document.getElementById("Selector").style.display = "none";
    document.getElementById("SelectWithinGender").style.display = "none";
  } else if (chartname == "BANS") {
    document.getElementById("HomeDesc").style.display = "none";
    document.getElementById("BANSDesc").style.display = "block";
    document.getElementById("DumbbellDesc").style.display = "none";
    document.getElementById("StackedDesc").style.display = "none";
    document.getElementById("BumpChartDesc").style.display = "none";
    document.getElementById("LollipopDesc").style.display = "none";
    document.getElementById("ActionButtons").style.display = "block";
    document.getElementById("SelectWithinCountry").style.display = "none";
    document.getElementById("Selector").style.display = "block";
    document.getElementById("SelectWithinGender").style.display = "none";
  } else if (chartname == "Dumbbell") {
    document.getElementById("HomeDesc").style.display = "none";
    document.getElementById("BANSDesc").style.display = "none";
    document.getElementById("DumbbellDesc").style.display = "block";
    document.getElementById("StackedDesc").style.display = "none";
    document.getElementById("BumpChartDesc").style.display = "none";
    document.getElementById("LollipopDesc").style.display = "none";
    document.getElementById("ActionButtons").style.display = "block";
    document.getElementById("SelectWithinCountry").style.display = "none";
    document.getElementById("Selector").style.display = "none";
    document.getElementById("SelectWithinGender").style.display = "block";
  } else if (chartname == "Stacked Bar") {
    document.getElementById("HomeDesc").style.display = "none";
    document.getElementById("BANSDesc").style.display = "none";
    document.getElementById("DumbbellDesc").style.display = "none";
    document.getElementById("StackedDesc").style.display = "block";
    document.getElementById("BumpChartDesc").style.display = "none";
    document.getElementById("LollipopDesc").style.display = "none";
    document.getElementById("ActionButtons").style.display = "block";
    document.getElementById("SelectWithinCountry").style.display = "block";
    document.getElementById("Selector").style.display = "none";
    document.getElementById("SelectWithinGender").style.display = "none";
  } else if (chartname == "Bump Chart") {
    document.getElementById("HomeDesc").style.display = "none";
    document.getElementById("BANSDesc").style.display = "none";
    document.getElementById("DumbbellDesc").style.display = "none";
    document.getElementById("StackedDesc").style.display = "none";
    document.getElementById("BumpChartDesc").style.display = "block";
    document.getElementById("LollipopDesc").style.display = "none";
    document.getElementById("ActionButtons").style.display = "block";
    document.getElementById("SelectWithinCountry").style.display = "none";
    document.getElementById("Selector").style.display = "block";
    document.getElementById("SelectWithinGender").style.display = "none";
  } else {
    document.getElementById("HomeDesc").style.display = "none";
    document.getElementById("BANSDesc").style.display = "none";
    document.getElementById("DumbbellDesc").style.display = "none";
    document.getElementById("StackedDesc").style.display = "none";
    document.getElementById("BumpChartDesc").style.display = "none";
    document.getElementById("LollipopDesc").style.display = "block";
    document.getElementById("ActionButtons").style.display = "block";
    document.getElementById("SelectWithinCountry").style.display = "none";
    document.getElementById("Selector").style.display = "block";
    document.getElementById("SelectWithinGender").style.display = "none";
  }
}

function changeParam(param, value, workbooks) {
  //send the parameter string, the new value, and an array of which workbooks the parameter needs to be changed on
  console.log("selector: " + value);
  for (var i = 0; i < workbooks.length; i++) {
    workbooks[i]
      .changeParameterValueAsync(param, value)
      .then(function () {
        console.log("Changed " + param + " to " + value);
      })
      .otherwise(function (err) {
        console.log("failed: " + err);
      });
  }
}
