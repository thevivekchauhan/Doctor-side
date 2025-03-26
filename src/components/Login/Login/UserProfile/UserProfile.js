// import { Avatar, Card, CardContent, Typography, Button } from '@mui/material';
// import { pink } from '@mui/material/colors';
// import { Box } from '@mui/system';
// import React from 'react';
// import useAuth from '../../../../Hooks/useAuth';

// const UserProfile = () => {
//     const { user, logout } = useAuth();
    
//     return (
//         <Card sx={{ display: { xs: 'flex-wrap', md: 'flex' }, maxWidth: '600px', my: 8, mx: 'auto', p: 5, textAlign: 'center' }}>
//             <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
//                 <CardContent>
//                     <Typography component="div" variant="h5">
//                         Welcome to our Website, {user.displayName}!
//                     </Typography>
//                     <Typography variant="subtitle1" color="text.secondary" component="div">
//                         {user.email}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                         Joined on: {new Date(user.metadata.creationTime).toLocaleDateString()}
//                     </Typography>
//                 </CardContent>
//                 <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
//                     <Button variant="contained" color="secondary" onClick={logout}>
//                         Logout
//                     </Button>
//                 </Box>
//             </Box>
//             <Avatar
//                 sx={{ mx: { xs: "auto", md: 1 }, border: 1, borderColor: '#f48fb1', boxShadow: 1, bgcolor: pink[500], width: 150, height: 150 }}
//                 alt={user.displayName}
//                 src={user.photoURL}
//             />
//         </Card>
//     );
// };

// export default UserProfile;





import { Avatar, Card, CardContent, Typography, Button, TextField } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const UserProfile = () => {
    const { user, logout } = useAuth();
    const [editing, setEditing] = useState(false);
    const [displayName, setDisplayName] = useState(user.displayName);

    const handleEdit = () => {
        setEditing(!editing);
    };

    const handleSave = () => {
        // Here you would update the user's display name in your backend or authentication system
        setEditing(false);
    };

    return (
        <Card sx={{ display: { xs: 'flex-wrap', md: 'flex' }, maxWidth: '600px', my: 8, mx: 'auto', p: 5, textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <CardContent>
                    {editing ? (
                        <TextField 
                            variant="outlined"
                            fullWidth
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />
                    ) : (
                        <Typography component="div" variant="h5">
                            Welcome to our Website, {displayName}!
                        </Typography>
                    )}
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {user.email}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Joined on: {new Date(user.metadata.creationTime).toLocaleDateString()}
                    </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, gap: 2 }}>
                    {editing ? (
                        <Button variant="contained" color="primary" onClick={handleSave}>
                            Save
                        </Button>
                    ) : (
                        <Button variant="contained" color="info" onClick={handleEdit}>
                            Edit
                        </Button>
                    )}
                    <Button variant="contained" color="secondary" onClick={logout}>
                        Logout
                    </Button>
                </Box>
            </Box>
            <Avatar
                sx={{ mx: { xs: "auto", md: 1 }, border: 1, borderColor: '#f48fb1', boxShadow: 1, bgcolor: pink[500], width: 150, height: 150 }}
                alt={user.displayName}
                src={user.photoURL}
            />
        </Card>
    );
};

export default UserProfile;