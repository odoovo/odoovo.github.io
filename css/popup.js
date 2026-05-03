 document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('migrationModal');
    if (!modalElement) {
        return;
    }
    const modal = new bootstrap.Modal(modalElement, {
        backdrop: true,
        keyboard: true
    });
    let reopenTimer = null;
    
    setTimeout(() => {
        modal.show();
    }, 1200);
    
    modalElement.addEventListener('hidden.bs.modal', function () {
        clearTimeout(reopenTimer);
        reopenTimer = setTimeout(() => {
            modal.show();
        }, 20000);
    });
});