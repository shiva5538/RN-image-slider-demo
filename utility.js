import ImagePicker from "react-native-image-crop-picker";
import { ActionSheet } from "native-base";
import { AppObjects } from "./constants";

export const openCameraActionSheet = () => {
    const promise = new Promise(resolve => {
        ActionSheet.show(
            {
                title: "Select media type",
                options: AppObjects.CAMERAACTIONSHEETBUTTONS,
                cancelButtonIndex: AppObjects.CANCEL_INDEX,
            },
            buttonIndex => {
                if (buttonIndex === 0) {
                    ImagePicker.openCamera({
                        cropping: true,
                    }).then(
                        images => {
                            resolve(images.path);
                        },
                        e => {
                            console.log(e);
                        }
                    );
                } else if (buttonIndex === 1) {
                    ImagePicker.openPicker({ cropping: true }).then(
                        images => {
                            resolve(images.path);
                        },
                        e => {
                            console.log(e);
                        }
                    );
                }
            }
        );
    });
    return promise;
};