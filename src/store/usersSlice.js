import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await fetch(API_URL);
    return response.json();
});

export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
    });
    return response.json();
});

export const updateUser = createAsyncThunk("users/updateUser", async (updatedUser) => {
    const response = await fetch(`${API_URL}/${updatedUser.id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: { "Content-Type": "application/json" },
    });
    return response.json();
});
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return id;
});

const usersSlice = createSlice({
    name: "users",
    initialState: { users: [], status: "idle", error: null },
    reducers: {}, 
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.status = "succeeded";
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            })
            .addCase(addUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                const index = state.users.findIndex((u) => u.id === action.payload.id);
                if (index !== -1) state.users[index] = action.payload;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user.id !== action.payload);
            });
    },
});

export default usersSlice.reducer;
