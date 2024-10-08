import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip } from 'chart.js';
import { clearFormPurpose, clearJarSelected } from "../actions/currentSelectionActions.js";


export const DoughnutChart = () => {

    const handleCancel = () => {
        dispatch(clearFormPurpose());
    };
    const dispatch = useDispatch();

    Chart.register(ArcElement);
    Chart.register([Tooltip]);
    const jars = useSelector((state) => (state.jars ? state.jars : null));

    const state = {
        labels: jars ? jars.map(item => item.name) : [],
        datasets: [
            {
                label: 'Distribution',
                backgroundColor: [
                    '#35DEB2',
                    '#36606E',
                    '#1590BB',
                    '#F15E81',
                    '#FFD166',
                    '#6A74C9'
                ]

                ,
                hoverBackgroundColor: [
                    '#1C765E',
                    '#1B2B31',
                    '#0C5873',
                    '#792E40',
                    '#A5863F',
                    '#3D4375'
                ]

                //    ,offset: 70
                , data: jars.map(item => item.percentage)
            }
        ]
    }


    return (
    <div className='chart'>
        <Doughnut
            data={state}
            options={{

                plugins: {
                    tooltip: {
                        titleFont: {
                            size: 50
                        },
                        bodyFont: {
                            size: 10
                        }
                    }
                }


                // ,
                // cutout: 230
            }}
        />
        <div className="bottom mt-5">
            <div
                className="close-alert div_img"
                style={{
                    backgroundImage: `url("/imgs/delete.png")`,
                }}
                onClick={() => {
                    handleCancel();
                }}
            />

        </div>
    </div>
    );
};

