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

        modalElement.style.pointerEvents = 'none';

        const modalDialog =
            modalElement.querySelector('.modal-dialog');

        if (modalDialog) {
            modalDialog.style.pointerEvents = 'auto';
        }

        let modal = createModal();

        let reopenTimer = null;

        setTimeout(() => {
            modal.show();
        }, 1200);

        modalElement.addEventListener('shown.bs.modal', function () {

            document.body.classList.remove('modal-open');

            document.body.style.overflow = 'auto';

            document.body.style.paddingRight = '0';

        });

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
                backdrop: false,
                keyboard: true,
                focus: false
            });

        }

        function cleanupBackdrops() {

            document
                .querySelectorAll('.modal-backdrop')
                .forEach(el => el.remove());

            document.body.classList.remove('modal-open');

            document.body.style.removeProperty('padding-right');

            document.body.style.overflow = 'auto';

        }

    }, 100);

});
