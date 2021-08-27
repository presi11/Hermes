import React, { useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPLOAD_FILE } from '../../graphql/mutations';

const Lab = () => {
    const fileInput = useRef();
    const [uploadFile] = useMutation(UPLOAD_FILE);

    const handleSubmit = (e) => {
        const data = new FormData();
        const {
            current: {
                validity,
                files: [file],
            }
        } = fileInput;
        if (validity.valid) {
            uploadFile({
                variables: { file }, onCompleted(data) {
                    console.log(data);
                }
            })
        }
        data.append('file', fileInput.current.files[0])
        console.log(data);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="customFile">File input - Drive Integration</label>
            <input type="file" className="form-control" id="customFile" ref={fileInput} />
            <input type="submit" />
        </form>
    )
}

export default Lab;