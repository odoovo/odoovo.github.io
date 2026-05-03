window.addEventListener('load', function () {
    const waitBootstrap = setInterval(() => {

        if (typeof bootstrap === 'undefined') {
            return;
        }
        clearInterval(waitBootstrap);
        const modalElement =
            document.getElementById('migrationModal');

    
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
        modalElement.addEventListener('hide.bs.modal', function () {

            if (document.activeElement) {
                document.activeElement.blur();
            }

        });
        modalElement.addEventListener('hidden.bs.modal', function () {

            clearTimeout(reopenTimer);

            reopenTimer = setTimeout(() => {
                modal.show();
            }, 20000);

        });
        document
            .querySelectorAll('[data-bs-toggle="dropdown"]')
            .forEach(dropdown => {

                if (!dropdown) {
                    return;
                }

                dropdown.addEventListener('click', function () {

                    const target =
                        dropdown.nextElementSibling;

                    if (!target) {
                        return;
                    }

                    if (!target.classList) {
                        return;
                    }

                });

            });

    }, 100);

});
