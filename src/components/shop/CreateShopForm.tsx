/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
// import useCreateShop from "./useCreateShop";
// import { useEditShops } from "./useEditShop";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import ShopButton from "./ShopButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateEditShop } from "../../services/apiShoping";
import toast from "react-hot-toast";

export default function CreateShopForm({
  // shopToEdit = {},
  onCloseModal,
}: {
  // shopToEdit: object;
  onCloseModal: () => void;
}) {
  // export default function AddFormShop({ shopToEdit = {} }) {
  // const { createShop, isShoping } = useCreateShop();
  // const { editShop, isEditing } = useEditShops();
  // const isCreating = isShoping || isEditing;

  // const { id: editId, ...editValues } = shopToEdit;
  // const isEditSession = Boolean(editId);

  const { register, formState, handleSubmit, reset, getValues } =
    useForm<ShopFormData>();
  const { errors } = formState;

  const querClient = useQueryClient();

  const { mutate, isPending: isCreating } = useMutation({
    mutationFn: CreateEditShop,
    onSuccess: () => {
      toast.success("new Shop successfully created");
      querClient.invalidateQueries({ queryKey: ["shop"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  interface ShopFormData {
    title: string;
    detail: string;
    description: string;
    price: number;
    discount: number;
    rating: number;
    image: FileList | string;
  }

  function onSubmit(data: ShopFormData) {
    mutate({ ...data, image: data.image[0] });
    // console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Shop title" error={errors?.title?.message}>
        <input
          type="text"
          id="title"
          {...register("title", { required: "This field is required" })}
          className="border border-gray-300 bg-oran-300 rounded-md shadow-sm p-2"
          disabled={isCreating}
        />
      </FormRow>

      <FormRow
        label="Detail"
        error={errors?.detail?.message}
        //disabled={isCreating}
      >
        <input
          type="text"
          id="detail"
          {...register("detail", { required: "this field is required" })}
          className="border border-gray-300 bg-oran-300 rounded-md shadow-sm p-2"
        />
      </FormRow>

      <FormRow
        label="Description"
        error={errors?.description?.message}
        //disabled={isCreating}
      >
        <input
          type="text"
          id="description"
          {...register("description", { required: "this field is required" })}
          className="border border-gray-300 bg-oran-300 rounded-md shadow-sm p-2"
        />
      </FormRow>

      <FormRow
        label="Price"
        error={errors?.price?.message}
        //disabled={isCreating}
      >
        <input
          type="number"
          id="price"
          {...register("price", { required: "this field is required" })}
          className="border border-gray-300 bg-oran-300 rounded-md shadow-sm p-2"
        />
      </FormRow>

      <FormRow
        label="Discount"
        error={errors?.discount?.message}
        //disabled={isCreating}
      >
        <input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is required",
            validate: (value) =>
              value <= getValues().price || "Discount should be less than 100",
          })}
          className="border border-gray-300 bg-oran-300 rounded-md shadow-sm p-2"
        />
      </FormRow>

      <FormRow
        label="Rating"
        error={errors?.rating?.message}
        //disabled={isCreating}
      >
        <input
          type="number"
          id="price"
          {...register("rating", { required: "this field is required" })}
          className="border border-gray-300 bg-oran-300 rounded-md shadow-sm p-2"
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <input
          id="image"
          // accept="image/*"
          type="file"
          className="text-md rounded-sm file:font-inherit file:font-medium file:px-4 file:py-2 file:mr-3 file:rounded-sm file:border-none file:text-brand-50 file:bg-brand-600 file:cursor-pointer file:transition-colors hover:file:bg-brand-700"
          {...register("image", { required: "this field is required" })}
        />
      </FormRow>

      <div className="flex flex-row-reverse mt-4 gap-4">
        <ShopButton
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </ShopButton>
        <ShopButton disabled={isCreating}>
          {/* {isEditSession ? "Edit Shop" : "new shop"} */}
          Edit Shop
        </ShopButton>
      </div>
    </Form>
  );
}
