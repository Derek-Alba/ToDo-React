import React from "react";
import './EmptyTodos.css'

function EmptyTodos() {
    return (
        <>
            <div className="container">
                <div class="brutalist-card">
                    <div class="brutalist-card__header"></div>
                    <div class="brutalist-card__message">
                        <div className="terminal-loader">
                            <div className="text"> CREA UNA TAREA</div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export { EmptyTodos };
/* From Uiverse.io by 0xnihilism */

