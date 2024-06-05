//* PWAForm component
//* Since: 0.0.0
//* Author: @crdgom
//* Description: PWA Form component displays to the user the UI to fill and generate the manifest.

import { useState } from "react";
import useForm from "../../hooks/useForm/useForm";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import "./PWAForm.css";

const PWAForm = () => {
  const [file, setFile] = useState(null);
  const [icons, setIcons] = useState([]);

  const sizes = [48, 72, 96, 128, 144, 152, 192, 384, 512];

  const resizeImage = (file, size) => {
    return new Promise((resolve) => {
      const img = document.createElement("img");
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);
        canvas.toBlob((blob) => {
          resolve({
            blob: blob,
            sizes: `${size}x${size}`,
            type: blob.type,
            name: `icon-${size}.png`,
          });
        }, "image/png");
      };
    });
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const generatePWAJson = async (data) => {
    let resizedImages = [];
    if (file) {
      const iconPromises = sizes.map((size) => resizeImage(file, size));
      resizedImages = await Promise.all(iconPromises);
      setIcons(resizedImages);
      data.icons = resizedImages.map(({ name, sizes, type }) => ({
        src: `icons/${name}`,
        sizes,
        type,
      }));
    }
    generateZip(data, resizedImages);
  };

  const generateZip = async (data, resizedImages) => {
    const zip = new JSZip();
    zip.file("manifest.json", JSON.stringify(data, null, 2));

    const iconsFolder = zip.folder("icons");
    resizedImages.forEach((icon) => {
      iconsFolder.file(icon.name, icon.blob);
    });

    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, "pwa_manifest.zip");
  };

  const { input, handleInputChange, handleSubmit } = useForm(generatePWAJson, {
    name: "",
    short_name: "",
    description: "",
    start_url: "",
    display: "",
    display_override: "",
    background_color: "",
    theme_color: "",
    icons: [],
    categories: "",
    file_handlers: "",
    id: "",
    launch_handler: "",
    orientation: "",
    prefer_related_applications: false,
    protocol_handlers: "",
    related_applications: "",
    scope: "",
    screenshots: "",
    share_target: "",
    shortcuts: "",
  });

  return (
    <>
      <section className="row">
        <section className="col">
          <section className="container">
            <form onSubmit={handleSubmit}>
              <section className="basics">
                <h2>Basics</h2>
                <div className="container">
                  <div className="left">
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                        placeholder="My PWA App"
                      />
                    </div>
                    <div>
                      <label htmlFor="description">Description:</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={input.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="display">Display:</label>
                      <select
                        name="display"
                        id="display"
                        onChange={handleInputChange}
                      >
                        <option value="fullscreen">Fullscreen</option>
                        <option value="standalone">Standalone</option>
                        <option value="minimal-ui">Minimal UI</option>
                        <option value="browser">Browser</option>
                      </select>
                      <input
                        type="hidden"
                        id="display"
                        name="display"
                        value={input.display}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="theme_color">Theme Color:</label>
                      <div className="color-input">
                        <input
                          type="color"
                          id="theme_color"
                          name="theme_color"
                          value={input.theme_color}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right">
                    <div>
                      <label htmlFor="short_name">Short Name:</label>
                      <input
                        type="text"
                        id="short_name"
                        name="short_name"
                        value={input.short_name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="start_url">Start URL:</label>
                      <input
                        type="text"
                        id="start_url"
                        name="start_url"
                        value={input.start_url}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="background_color">
                        Background Color:
                      </label>
                      <div className="color-input">
                        <input
                          type="color"
                          id="background_color"
                          name="background_color"
                          value={input.background_color}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div>
                <label htmlFor="display_override">Display Override:</label>
                <input
                  type="text"
                  id="display_override"
                  name="display_override"
                  value={input.display_override}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="icons">Icons:</label>
                <input
                  type="file"
                  name="icons"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                />
              </div>
              <div>
                <label htmlFor="categories">Categories:</label>
                <input
                  type="text"
                  id="categories"
                  name="categories"
                  value={input.categories}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="file_handlers">File Handlers:</label>
                <input
                  type="text"
                  id="file_handlers"
                  name="file_handlers"
                  value={input.file_handlers}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="id">ID:</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={input.id}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="launch_handler">Launch Handler:</label>
                <input
                  type="text"
                  id="launch_handler"
                  name="launch_handler"
                  value={input.launch_handler}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="orientation">Orientation:</label>
                <input
                  type="text"
                  id="orientation"
                  name="orientation"
                  value={input.orientation}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="prefer_related_applications">
                  Prefer Related Applications:
                </label>
                <input
                  type="checkbox"
                  id="prefer_related_applications"
                  name="prefer_related_applications"
                  checked={input.prefer_related_applications}
                  onChange={(e) =>
                    handleInputChange({
                      target: { name: e.target.name, value: e.target.checked },
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="protocol_handlers">Protocol Handlers:</label>
                <input
                  type="text"
                  id="protocol_handlers"
                  name="protocol_handlers"
                  value={input.protocol_handlers}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="related_applications">
                  Related Applications:
                </label>
                <input
                  type="text"
                  id="related_applications"
                  name="related_applications"
                  value={input.related_applications}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="scope">Scope:</label>
                <input
                  type="text"
                  id="scope"
                  name="scope"
                  value={input.scope}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="screenshots">Screenshots (URL):</label>
                <input
                  type="text"
                  id="screenshots"
                  name="screenshots"
                  value={input.screenshots}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="share_target">Share Target:</label>
                <input
                  type="text"
                  id="share_target"
                  name="share_target"
                  value={input.share_target}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="shortcuts">Shortcuts:</label>
                <input
                  type="text"
                  id="shortcuts"
                  name="shortcuts"
                  value={input.shortcuts}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" id="submit">
                Generate JSON
              </button>
            </form>
          </section>
        </section>
        <section className="col">
          <section className="container output">
            <h2 className="output-title">Output</h2>
            <button className="copy-code">
              <i></i>
            </button>
            <div>
              <code>
                <pre>{JSON.stringify(input, null, 2)}</pre>
              </code>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default PWAForm;
