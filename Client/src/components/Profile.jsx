import { React, useState } from 'react';

// ANT-D :
import { Upload } from 'antd';

// Assets | ICONS :
import { PlusOutlined } from '@ant-design/icons';

// CSS :
import './style/Profile.scss';

function Profile() {

    const [fileList, setFileList] = useState([]);
    const [previewImage, setPreviewImage] = useState(null);
    const onChangee = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        if (newFileList.length > 0) {
            const file = newFileList[0].originFileObj;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => setPreviewImage(reader.result);
        } else {
            setPreviewImage(null);
        }
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const imgWindow = window.open(src);
        imgWindow?.document.write(`<img src="${src}" alt="preview" />`);
    };

    return (
        <div className="profile-content">
            <h2>Profile</h2>
            <div className="profile-picture">
                <Upload
                    name="avatar"
                    listType="picture-circle"
                    className="avatar-uploader"
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    fileList={fileList}
                    multiple={false}
                    onChange={onChangee}
                    onPreview={onPreview}
                    showUploadList={false}
                >
                    {previewImage ? (
                        <img
                            src={previewImage}
                            alt="preview"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    ) : (
                        <PlusOutlined style={{}} />
                    )}
                </Upload>
            </div>
            <form>
                <div className="flex">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-group">
                    <label>Contacts Number</label>
                    <input type="text" />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" />
                </div>
                <div className="flex"> <div className="form-group">
                    <label>City</label>
                    <input type="text" />
                </div>
                    <div className="form-group">
                        <label>State</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Zip code</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" />
                </div>
                <button type="submit" className="save-btn">Save</button>
            </form>
        </div>
    )
}

export default Profile