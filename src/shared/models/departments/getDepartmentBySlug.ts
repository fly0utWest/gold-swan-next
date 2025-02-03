export async function getDepartmentBySlug(slug: string) {
  try {
    const myModule = await import(`@/shared/models/departments/${slug}`);
    return myModule.default;
  } catch (error: unknown) {
    console.error(`Error while fetching department ${slug}:`, error);
    return null;
  }
}
