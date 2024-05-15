export const response = (
  success: boolean,
  message: string,
  data: { [key: string]: any } | null
) => {
  return { success, message, data };
};
