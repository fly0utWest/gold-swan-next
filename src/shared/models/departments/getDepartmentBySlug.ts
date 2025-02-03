export async function getDepartmentBySlug(slug: string) {
  try {
    const module = await import(`@/shared/models/departments/${slug}`);
    return module.default;
  } catch (error: unknown) {
    console.error(`Error while fetching department ${slug}:`, error);
    return null;
  }
}
