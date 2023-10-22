export const load = async ({ cookies }) => {
  const theme = cookies.get('colortheme');
  return { theme };
};
