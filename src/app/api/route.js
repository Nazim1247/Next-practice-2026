
export const feedback = [
    {
        id: 1,
        message: "very good"
    },
    {
        id: 2,
        message: "very nice"
    }
]
export async function GET(request) {
    return Response.json({
        status: 200,
        message: "test api"
    });
}