// Note: CRUD component...!

import React, { Fragment, useEffect, useState } from 'react';

const CRUD = () => {

    // Note: Handeling states here...!
    const [inputValue, setInputValue] = useState("");
    const [dataArr, setDataArr] = useState([]);
    const [editFlag, setEditFlag] = useState(false);
    const [editItemIndex, setEditItemIndex] = useState("");

    // Note: When this component mounted then this hook will run...!
    useEffect(() => {
        if (localStorage.getItem("Data") != null) {
            // Note: Fetchingt data from local storage...!
            let data = localStorage.getItem("Data");
            let dataInJSON = JSON.parse(data);
            console.log("Data", dataInJSON);
            setDataArr(dataInJSON);
        }

        else localStorage.setItem("Data", JSON.stringify([]));
    }, []);

    // Note: This hook will run on every update of dataArr state...!
    useEffect(() => {
        console.log(dataArr);

        // Note: Set data in local storage...!
        let dataInStr = JSON.stringify(dataArr);
        localStorage.setItem("Data", dataInStr);
    }, [dataArr]);

    // Note: Function to add item...!
    const addItem = () => {

        if (inputValue.trim().length < 1) {
            alert('Invalid Data!');
            setInputValue("");
        }

        else {
            let dataList = dataArr.slice(0);
            dataList.push(inputValue);
            setDataArr(dataList);
            setInputValue("");
        };
    };

    // Note: Function to delete item...!
    const deleteItem = (index) => {
        // console.log(index);

        let dataList = dataArr.slice(0);
        dataList.splice(index, 1);
        setDataArr(dataList);
    };

    // Note: Function to edit item...!
    const editItem = (itemValue, index) => {
        // console.log(itemValue, index);

        setEditFlag(true);
        setInputValue(itemValue);
        setEditItemIndex(index);
    };

    // Note: Function to update item...!
    const updateItem = () => {
        let dataList = dataArr.slice(0);
        dataList.splice(editItemIndex, 1, inputValue);
        setDataArr(dataList);
        setInputValue("");
        setEditFlag(false);
        setEditItemIndex("");
    };

    // Note: Function to cancel update...!
    const cancelUpdate = () => {
        setEditFlag(false);
        setInputValue("");
        setEditItemIndex("");
    };

    // Note: Function to delete all items...!
    const deleteAll = () => {
        let dataList = dataArr.slice(0);
        dataList = [];
        setDataArr(dataList);
    };

    return (
        <Fragment>
            <h1> JavaScript World! </h1>

            <input
                type={'text'}
                placeholder="Write Something"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />

            {
                (editFlag)
                    ?
                    (
                        <>
                            <button onClick={updateItem}> Update Item </button>
                            <button onClick={cancelUpdate}> Cancel </button>
                        </>
                    )
                    :
                    (
                        <>
                            <button onClick={addItem}> Add Item </button>
                            <button onClick={deleteAll}> Delete All </button>
                        </>
                    )
            }

            <ul>
                {
                    (dataArr && dataArr.length > 0)
                        ?
                        (
                            dataArr.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item}

                                        <button onClick={() => deleteItem(index)}>
                                            Delete Item
                                        </button>

                                        <button onClick={() => editItem(item, index)}>
                                            Edit Item
                                        </button>
                                    </li>
                                );
                            })
                        )
                        :
                        (<h2> Data Not Found! </h2>)
                }
            </ul>
        </Fragment>
    );
};


export default CRUD;