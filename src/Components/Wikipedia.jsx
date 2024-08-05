import React, { useState } from 'react';
import { Button, Card, CardContent, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';

export default function Wikipedia({ isMobile }) {
    const [apidata, setApidata] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            search: ''
        }
    });

    const fetchResults = async (searchQuery, pageNumber) => {
        setLoading(true);
           console.log((pageNumber-1)*20);
           
        try {
            const response = await axios.get(
                `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchQuery}&sroffset=${(pageNumber - 1) * 20}`
            );
            const results = response.data.query.search;
            setApidata((prevData) => [...prevData, ...results]);
            setPage(pageNumber + 1);
            setHasMore(results.length > 0);
            setLoading(false);
            setError(null);
        } catch (err) {
            setLoading(false);
            setError(err.response ? err.response.data.message : err.message);
        }
    };

    const onSubmit = (formData) => {
        setSearchTerm(formData.search);
        setApidata([]);
        setPage(1);
        setHasMore(true);
        fetchResults(formData.search, 1);
    };

    const loadMore = () => {
        fetchResults(searchTerm, page);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                <Controller
                    name="search"
                    control={control}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Search"
                            className={`${isMobile ? '!w-full' : '!w-2/4'}`}
                            variant="outlined"
                            placeholder="Type your search query"
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary">
                    Search
                </Button>
            </form>

            {!loading && !apidata.length && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Typography variant='h3' color='primary' >Search Something</Typography>
                </div>
            )}
            {/* {loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <CircularProgress />
                </div>
            )} */}

            {error && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Alert severity="error">{error}</Alert>
                </div>
            )}

            <Grid container spacing={3} p={4}>
                {apidata.length > 0 && (
                    apidata.map((item) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={item.pageid}>
                            <Card sx={{ maxWidth: 350 }}>
                                <a
                                    href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body2' color="text.secondary">
                                            {item.snippet}
                                        </Typography>
                                    </CardContent>
                                </a>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>

            { apidata.length > 0 && !loading && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button onClick={loadMore} variant="contained" color="primary">
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
}
