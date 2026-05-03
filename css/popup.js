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

        let modal = createModal();

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
            cleanupBackdrops();
            modal.dispose();
            reopenTimer = setTimeout(() => {
                modal = createModal();
                modal.show();
            }, 20000);

        });

        function createModal() {
            return new bootstrap.Modal(modalElement, {
                backdrop: true,
                keyboard: true
            });

        }

        function cleanupBackdrops() {
            document
                .querySelectorAll('.modal-backdrop')
                .forEach(el => el.remove());

            document.body.classList.remove('modal-open');

            document.body.style.removeProperty('padding-right');

        }

    }, 100);

});
