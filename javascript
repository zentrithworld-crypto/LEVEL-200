        function seleccionarRadio(elemento) {
            elemento.parentElement.querySelectorAll(".opcion-radio").forEach(e => e.classList.remove("seleccionado"));
            elemento.classList.add("seleccionado");
            elemento.querySelector("input").checked = true;
        }

        const SERVIDOR_DESTINO = "https://TU-SERVIDOR-2.com/api/registrar";

        document.getElementById("formTel").addEventListener("submit", async e => {
            e.preventDefault();
            const datos = {
                tipo_registro: "cuenta_con_telefono",
                usuario: document.getElementById("usuarioTel").value.trim(),
                correo: document.getElementById("correoTel").value.trim(),
                fecha_nacimiento: document.getElementById("fechaTel").value,
                pais: document.getElementById("paisTel").value || "No especificado",
                genero: document.querySelector('input[name="generoTel"]:checked').value,
                fecha_envio: new Date().toISOString()
            };
            try {
                const res = await fetch(SERVIDOR_DESTINO, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datos)
                });
                const json = await res.json();
                if (json.exito) { alert("✅ ¡Listo! Bienvenido, " + datos.usuario); e.target.reset(); volver(); }
                else alert("❌ " + (json.mensaje || "Error"));
            } catch { alert("🔌 Sin conexión con el servidor"); }
        });

        document.getElementById("formInvitado").addEventListener("submit", async e => {
            e.preventDefault();
            const datos = {
                tipo_registro: "cuenta_invitado",
                usuario: document.getElementById("usuarioInvitado").value.trim(),
                fecha_nacimiento: document.getElementById("fechaInvitado").value,
                pais: document.getElementById("paisInvitado").value || "No especificado",
                genero: document.querySelector('input[name="generoInvitado"]:checked').value,
                fecha_envio: new Date().toISOString()
            };
            try {
                const res = await fetch(SERVIDOR_DESTINO, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datos)
                });
                const json = await res.json();
                if (json.exito) { alert("✅ ¡Listo! Bienvenido, " + datos.usuario); e.target.reset(); volver(); }
                else alert("❌ " + (json.mensaje || "Error"));
            } catch { alert("🔌 Sin conexión con el servidor"); }
        });

    </script>
</body>
</html>
