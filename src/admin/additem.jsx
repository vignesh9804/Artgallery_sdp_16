import React, { useState } from 'react';
import axios from 'axios';
import AdminNav from '../components/adminnav';
import '../css/additem.css';
const Additem = () => {
    const [itemData, setItemData] = useState({
        id: "",
        name: "",
        artistName: "",
        description: "",
        cost: "",
        category: "",
        url: "",
        soldOutArt: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItemData({ ...itemData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://artgallerybackend-production-1fb5.up.railway.app/art", itemData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            alert("Item added successfully!");
            console.log(response.data);
        } catch (error) {
            console.error("Error adding item:", error);
            alert("Failed to add the item. Please try again.");
        }
    };

    return (
        <div className="add-item-container mt-5">
            <AdminNav/>
            <h2 className='mt-5'>Add New Item</h2>
            <form onSubmit={handleSubmit} className="add-item-form">
                {/* <label>
                    ID:
                    <input
                        type="text"
                        name="id"
                        value={itemData.id}
                        onChange={handleChange}
                        required
                    />
                </label> */}
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={itemData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Artist Name:
                    <input
                        type="text"
                        name="artistName"
                        value={itemData.artistName}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={itemData.description}
                        onChange={handleChange}
                    ></textarea>
                </label>
                <label>
                    Cost:
                    <input
                        type="number"
                        name="cost"
                        value={itemData.cost}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Category:
                    <input
                        type="text"
                        name="category"
                        value={itemData.category}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Image URL:
                    <input
                        type="url"
                        name="url"
                        value={itemData.url}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Sold Out:
                    <input
                        type="checkbox"
                        name="soldOutArt"
                        checked={itemData.soldOutArt}
                        onChange={(e) => setItemData({ ...itemData, soldOutArt: e.target.checked })}
                    />
                </label>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default Additem
