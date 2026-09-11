/* ===========================
   Sidebar Collapse
=========================== */

const sidebar =
    document.querySelector(".sidebar");

const sidebarToggle =
    document.getElementById("sidebarToggle");

const sidebarToggleIcon =
    document.querySelector(".sidebar-toggle-icon");

function updateSidebarToggleIcon() {
    if (!sidebar || !sidebarToggleIcon) {
        return;
    }

    const isCollapsed =
        sidebar.classList.contains("collapsed");

    sidebarToggleIcon.textContent =
        isCollapsed ? "›" : "‹";

    sidebarToggle?.setAttribute(
        "aria-label",
        isCollapsed
            ? "サイドメニューを開く"
            : "サイドメニューを閉じる"
    );
}

function closeSidebarAccordions() {
    const openAccordions =
        sidebar?.querySelectorAll(
            ".accordion.open"
        );

    openAccordions?.forEach((accordion) => {
        accordion.classList.remove("open");
    });
}

sidebarToggle?.addEventListener("click", () => {
    if (!sidebar) {
        return;
    }

    sidebar.classList.toggle("collapsed");

    if (
        sidebar.classList.contains("collapsed")
    ) {
        closeSidebarAccordions();
    }

    updateSidebarToggleIcon();
});

updateSidebarToggleIcon();