import React, { useEffect, useState, useMemo, Suspense, lazy } from 'react';
import axios from 'axios';
import {
    MaterialReactTable,
} from 'material-react-table';
// const MaterialReactTable = lazy(() => import('material-react-table'));
import CircularProgress from '@mui/material/CircularProgress';
import { Stack } from '@mui/material';

export default function JobPortal() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchingData();
    }, []);

    const fetchingData = async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
            console.log(resp.data.products);
            setProducts(resp.data.products);
            setLoading(false);
        } catch (err) {
            setLoading(false); // Ensure loading is set to false when there's an error
            setError(err.response ? err.response.data.message : err.message);
        }
    };

    const columns = useMemo(() => [
        {
            accessorKey: 'brand', // Accessor for brand
            header: 'Brand',
            size: 150,
        },
        {
            accessorKey: 'category', // Accessor for category
            header: 'Category',
            size: 150,
        },
        {
            accessorKey: 'price', // Accessor for price
            header: 'Price',
            size: 150,
        },
        // {
        //     accessorKey: 'tags', // Accessor for price
        //     header: 'tags',
        //     size: 150,
        // },
        {
            accessorKey: 'dimensions.width', // Accessor for price
            header: 'Width',
            size: 150,
        },

        // it is printing array of value
        {
            accessorKey: 'tags', // Accessor for tags
            header: 'Tags',
            size: 150,
            Cell: ({ cell }) => {
                const tags = cell.getValue();
                return (tags && tags.length > 0) ? tags[1] : 'No tags'; // Display only the first tag
            },
        },

        // {
        //     accessorKey: 'review.rating', // Access nested data with dot notation
        //     header: 'Rating',
        //     size: 150,
        //     Cell: ({ cell }) => cell.getValue() || 'N/A', // Custom rendering if necessary
        // },

        //  sum all the rating the gives  1 value

        // {
        //     id: 'rating', // Use a custom id since this requires custom logic
        //     header: 'Rating',
        //     size: 150,
        //     Cell: ({ row }) => {
        //         const reviews = row.original.reviews;
        //         if (reviews && reviews.length > 0) {
        //             const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
        //             return averageRating.toFixed(1); // Return average rating rounded to 1 decimal place
        //         }
        //         return 'N/A'; // Return 'N/A' if no reviews
        //     },
        // },
        {
            id: 'rating', // Use a custom id since this requires custom logic
            header: 'Ratings',
            size: 150, // Adjust size as needed
            Cell: ({ row }) => {
                // console.log(row);

                const reviews = row.original.reviews;
                // console.log(reviews);

                if (reviews && reviews.length > 0) {
                    return (
                        <div>
                            {reviews.map((review, index) => (
                                <p key={index}> {review.rating}</p>
                            ))}
                        </div>
                    );
                }
                return <p>0</p>; // Handle case where there are no reviews
            },
        },

    ], []);


    return (
        <>
            {/* {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <MaterialReactTable
                    columns={columns}
                    data={products}
                />
            )} */}
            <div>
                <Suspense >
                    <Stack alignItems={'center'} justifyContent={'center'}>
                        {loading && <CircularProgress color="success" />}
                    </Stack>
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && (
                        <MaterialReactTable
                            columns={columns}
                            data={products}
                        />
                    )}
                </Suspense>
            </div>
        </>
    );
};
