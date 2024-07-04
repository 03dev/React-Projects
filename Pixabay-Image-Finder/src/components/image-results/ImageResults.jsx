import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ZoomIn from '@mui/icons-material/ZoomIn';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

export default class ImageResults extends Component {
    state = {
        open: false,
        currentImg: ''
    }

    handleOpen = img => {
        this.setState({open: true, currentImg: img})
    }

    handleClose = () => {
        this.setState({open: false})
    }

    render() {
        let imageListContent;
        const { images } = this.props;
        if (images) {
            imageListContent = (
                <ImageList cols={3}>
                    {images.map((image) => (
                        <ImageListItem key={image.id}>
                            <img src={image.largeImageURL} alt={image.tags} />
                            <ImageListItemBar
                                title={image.tags}
                                actionIcon={
                                    <IconButton
                                        aria-label={`zoom in ${image.tags}`}
                                        onClick={() => this.handleOpen(image.largeImageURL)}
                                    >
                                        <ZoomIn style={{ color: 'white' }} />
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            );
        } else {
            imageListContent = null;
        }

        const actions = [
            <Button key="close" onClick={this.handleClose} color="primary">
                Close
            </Button>
        ];

        return (
            <div>
                {imageListContent}
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="image-dialog"
                >
                    <DialogContent>
                        <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
                    </DialogContent>
                    <DialogActions>
                        {actions}
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};
