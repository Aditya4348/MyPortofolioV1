import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup() {
    return (
        <Box className="button-group-container">
            <ButtonGroup variant="outlined" aria-label="Basic button group" className="button-group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Box>
    );
}
