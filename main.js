document.addEventListener("DOMContentLoaded", function () {
  const tableRows = document.querySelectorAll(".table-row");

  tableRows.forEach((row) => {
    row.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetRow = document.getElementById(targetId);

      // Toggle visibility of the data row
      if (targetRow.style.display === "table-row") {
        targetRow.style.display = "none";
      } else {
        // Hide all other data rows
        document.querySelectorAll(".data-row").forEach((row) => {
          row.style.display = "none";
        });

        targetRow.style.display = "table-row";
      }
    });
  });
});
