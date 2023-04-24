import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SearchBox } from "./searchBox";
import Link from "next/link";

interface IFormData {
  address: string;
  latitude: number;
  longitude: number;
  bedrooms: string;
  image: FileList;
}

interface IProps {}

export default function PlaceForm({}: IProps) {
  const [submitting, setSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>();
  const { register, handleSubmit, setValue, watch } = useForm<IFormData>({
    defaultValues: {},
  });
  const address = watch("address");

  useEffect(() => {
    register("address", { required: "Please enter your address" });
    register("latitude", { required: true, min: -90, max: 90 });
    register("longitude", { required: true, min: -180, max: 180 });
  }, [register]);

  const handleCreate = async (data: IFormData) => {
    console.log(data);
  };

  const onSubmit = (data: IFormData) => {
    setSubmitting(true);
    handleCreate(data);
  };

  return (
    <form
      className="mx-auto, w-1/2 py-4 text-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-xl">Add a New house</h1>
      <div className="mt-4">
        <label htmlFor="search" className="block">
          Search for your address
        </label>
        <SearchBox
          onSelectAddress={(
            address: any,
            latitude: number,
            longitude: number
          ) => {
            setValue("address", address);
            setValue("latitude", latitude);
            setValue("longitude", longitude);
          }}
          defaultValue=""
          onSelectAdress={function (
            address: string,
            latitude: number | null,
            longitude: number | null
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
        {/* {errors.address && <p>{errors.address.message}</p>} */}
        {/* <h2>{address}</h2> */}
      </div>
      {address && (
        <>
          <div className="mt-4">
            <label
              htmlFor="image"
              className="p-4 border-dashed border-2 border-gray-200 block cursor-pointer"
            >
              Click to add image (16:9)
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              style={{ display: "none" }}
              // ref={register({
              //   validate: (fileList: FileList) => {
              //     if (fileList.length === 1) return true;
              //     return "Please upload one file";
              //   },
              // })}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event?.target?.files?.[0]) {
                  const file = event.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setPreviewImage(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            {previewImage && (
              <img
                src={previewImage}
                className="mt-4 object-cover w-full"
                // style={{height: `${(9 / 16) * 576}px` }}
              ></img>
            )}
            {/* {Error.image && <p>{Error.image.message}</p>} */}
          </div>
          <div className="mt-4">
            <label htmlFor="title" className="block ">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="p-2 border-2 border-gray-200"
            />{" "}
            {/* TODO add control of missing name */}
          </div>
          <div className="mt-4 space-x-4 ">
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded text-white"
              type="submit"
              disabled={submitting}
            >
              Save
            </button>
            <Link href="/">Cancel</Link>
          </div>
        </>
      )}
    </form>
  );
}
