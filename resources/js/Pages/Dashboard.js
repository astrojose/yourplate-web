import React, {useState,useEffect} from 'react';
import {format} from 'date-fns';
import Authenticated from '@/Layouts/Authenticated';
import { useField, useFormikContext } from "formik";
import { info } from 'laravel-mix/src/Log';


export default function Dashboard({auth,errors}) {
    // console.clear()
    return (
        <Authenticated
            auth={auth}
            errors={errors}
        >
            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className='py-2 px-1 font-semibold'>Hello, {auth.user.name}!</h1>
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-3">
                        <OderContainer />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

const OderContainer = () => {
    const [todayDate, setTodayDate] = useState(new Date().toISOString());

    const [today, settoday] = useState(format(new Date(), 'eeee').toLowerCase());
    
    const [todayMenu, setTodayMenu] = useState(getTodayMenu(today));

    // useEffect(() => {
    //     setTodayMenu(getTodayMenu(today))
    // }, []);

    // console.log(todayMenu)

    const categories = [...new Set(todayMenu[0]?.map(menu=>menu.category))]
    
    return(
        <div className="p-2">
            Today's fav
            <div className="flex space-x-2 flex-wrap py-2">
                <Food foods={todayMenu}/>
            </div>
            Today's Menu
            <div className="flex flex-col space-y-3 space-x-2 py-2">
                {
                    todayMenu.length > 0 ? categories.map((cat,index)=>(
                        <Category key={index} />
                    )) : <EmptyMenu />
                }
                {/* <Category menu={todayMenu}/> */}
            </div>
        </div>
    )
}

const EmptyMenu = () => {
    return ( 
        <div className="my-2 mx-2">nothiiing!!</div> 
    );
}
 
const Category = ({menu,categories}) => {
    return ( 
        <div className="flex flex-wrap border-b-2 border-separate border-red-300">
            <div className="flex">categorised list</div>
            <div className="flex">categorised list</div>
            <div className="flex">categorised list</div>
        </div>
     );
}
 

const Food = ({name}) => {
    return ( 
        <div className='border-2 border-purple-600 rounded-xl px-2 py-1'>
            Despacito
        </div>  
     );
}


// Utils

const getTodayMenu = (day) => {
    const menu = [
        {
            day: "monday",
            foods: [
                {
                    name: "Wali",
                    category: "primary"
                },
                {
                    name: "Ugali",
                    category: "primary"
                },
                {
                    name: "Ndizi",
                    category: "primary"
                },
                {
                    name: "Nyama",
                    category: "secondary"
                },
                {
                    name: "Kuku",
                    category: "secondary"
                },
                {
                    name: "Kuku",
                    category: "matunda"
                },
                {
                    name: "Maharage",
                    category: "optional"
                },
            ],
        },
        {
            day: "tuesday",
            foods: [
                {
                    name: "Wali",
                    category: "primary"
                },
                {
                    name: "Ugali",
                    category: "primary"
                },
                {
                    name: "Tambi",
                    category: "primary"
                },
                {
                    name: "Nyama",
                    category: "secondary"
                },
                {
                    name: "Njegere",
                    category: "secondary"
                },
                {
                    name: "Maini",
                    category: "secondary"
                },
                {
                    name: "Samaki",
                    category: "secondary"
                },
            ],
        },
        {
            day: "wednesday",
            foods: [
                {
                    name: "Wali",
                    category: "primary"
                },
                {
                    name: "Ugali",
                    category: "primary"
                },
                {
                    name: "Tambi",
                    category: "primary"
                },
                {
                    name: "Nyama",
                    category: "secondary"
                },
                {
                    name: "Njegere",
                    category: "secondary"
                },
                {
                    name: "Maini",
                    category: "secondary"
                },
                {
                    name: "Samaki",
                    category: "secondary"
                },
            ],
        },
        {
            day: "thursday",
            foods: [
                {
                    name: "Wali",
                    category: "primary"
                },
                {
                    name: "Ugali",
                    category: "primary"
                },
                {
                    name: "Tambi",
                    category: "primary"
                },
                {
                    name: "Nyama",
                    category: "secondary"
                },
                {
                    name: "Njegere",
                    category: "secondary"
                },
                {
                    name: "Maini",
                    category: "secondary"
                },
                {
                    name: "Samaki",
                    category: "secondary"
                },
            ],
        },
        {
            day: "friday",
            foods: [
                {
                    name: "Wali",
                    category: "primary"
                },
                {
                    name: "Ugali",
                    category: "primary"
                },
                {
                    name: "Tambi",
                    category: "primary"
                },
                {
                    name: "Nyama",
                    category: "secondary"
                },
                {
                    name: "Njegere",
                    category: "secondary"
                },
                {
                    name: "Maini",
                    category: "secondary"
                },
                {
                    name: "Samaki",
                    category: "secondary"
                },
            ],
        },
    
    ]

    return menu.filter(menu => menu.day === day)
            .map(menu => menu.foods)
} 
