import React from "react"




const Switch = ({ toggled, onClick }) => {
    return (

        <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
            <div className="notch">
                <div >
                    {/* <div className={styles.shape.sm} />

                    <div className={styles.shape.sm} />
                    <div className={styles.shape.md} /> */}


                </div>

            </div>


        </div >
    )
}


export default Switch