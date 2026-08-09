        function seleccionarRadio(elemento) {
            elemento.parentElement.querySelectorAll(".opcion-radio").forEach(e => e.classList.remove("seleccionado"));
            elemento.classList.add("seleccionado");
            elemento.querySelector("input").checked = true;
        }

    </script>
</body>
</html>
