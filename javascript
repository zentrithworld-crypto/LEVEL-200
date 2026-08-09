        function seleccionarRadio(elemento) {
            elemento.parentElement.querySelectorAll(".opcion-radio").forEach(e => e.classList.remove("seleccionado"));
            elemento.classList.add("seleccionado");
            elemento.querySelector("input").checked = true;
        }

    </script>
</body>
</html>
        // ==================================================
        // 📤 CONEXIÓN CON EL SERVIDOR 2 — NO SE MEZCLAN, CADA UNO POR SU LADO
        // ==================================================
        // 👇 LO ÚNICO QUE TENÉS QUE CAMBIAR: la dirección de tu servidor
        const SERVIDOR_DESTINO = "https://TU-SERVIDOR-2.com/api/registrar";

        // ------------------------------
        // BLOQUE 1 — CUENTA CON TELÉFONO
        // ------------------------------
        document.getElementById("formTel").addEventListener("submit", async e => {
            e.preventDefault();

            // ESTE JSON LO ARMA SOLO EL FORMULARIO DE TELÉFONO
            const datos = {
                tipo_registro: "cuenta_con_telefono",
                usuario: document.getElementById("usuarioTel").value.trim(),
                correo: document.getElementById("correoTel").value.trim(),
                fecha_nacimiento: document.getElementById("fechaTel").value,
                pais: document.getElementById("paisTel").value || "No especificado",
                genero: document.querySelector('input[name="generoTel"]:checked').value,
                fecha_envio: new Date().toISOString()
            };

            console.log("📤 Enviado:", datos);

            try {
                const respuesta = await fetch(SERVIDOR_DESTINO, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datos)
                });

                const resultado = await respuesta.json();
                if (resultado.exito) {
                    alert("✅ ¡Registrado! Bienvenido, " + datos.usuario);
                    e.target.reset();
                    volver();
                } else {
                    alert("❌ " + (resultado.mensaje || "Error al registrar"));
                }
            } catch {
                alert("🔌 No se pudo conectar con el servidor");
            }
        });

        // ------------------------------
        // BLOQUE 2 — CUENTA INVITADO
        // ------------------------------
        document.getElementById("formInvitado").addEventListener("submit", async e => {
            e.preventDefault();

            // ESTE JSON LO ARMA SOLO EL FORMULARIO DE INVITADOS
            const datos = {
                tipo_registro: "cuenta_invitado",
                usuario: document.getElementById("usuarioInvitado").value.trim(),
                fecha_nacimiento: document.getElementById("fechaInvitado").value,
                pais: document.getElementById("paisInvitado").value || "No especificado",
                genero: document.querySelector('input[name="generoInvitado"]:checked').value,
                fecha_envio: new Date().toISOString()
            };

            console.log("📤 Enviado:", datos);

            try {
                const respuesta = await fetch(SERVIDOR_DESTINO, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(datos)
                });

                const resultado = await respuesta.json();
                if (resultado.exito) {
                    alert("✅ ¡Registrado! Bienvenido, " + datos.usuario);
                    e.target.reset();
                    volver();
                } else {
                    alert("❌ " + (resultado.mensaje || "Error al registrar"));
                }
            } catch {
                alert("🔌 No se pudo conectar con el servidor");
            }
        });
        function seleccionarRadio(elemento) {
            elemento.parentElement.querySelectorAll(".opcion-radio").forEach(e => e.classList.remove("seleccionado"));
            elemento.classList.add("seleccionado");
            elemento.querySelector("input").checked = true;
        }
const SERVIDOR_DESTINO = "https://TU-SERVIDOR-2.com/api/registrar";
        function seleccionarRadio(elemento) {
            elemento.parentElement.querySelectorAll(".opcion-radio").forEach(e => e.classList.remove("seleccionado"));
            elemento.classList.add("seleccionado");
            elemento.querySelector("input").checked = true;
        }

        // ↓ PEGÁ TODO LO QUE COPIASTE ACÁ ABAJO ↓
        // ==================================================
        // 📤 CONEXIÓN CON EL SERVIDOR 2 — NO SE MEZCLAN...
        // ... todo el bloque que copiaste ...

    </script>
</body>
</html>
