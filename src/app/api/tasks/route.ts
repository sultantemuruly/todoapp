import prisma from "@/lib/db";
import { NextResponse } from 'next/server';

export async function POST(req: Request){
    try {
        const { text } = await req.json();
        const newTask = await prisma.task.create({
            data: {
                text
            }
        });

        return NextResponse.json({ newTask }, { status:200 });

    } catch(error) {
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    try {
        const { deleteId } = await req.json();

        const deletedTask = await prisma.task.delete({
            where: { taskId: parseInt(deleteId) },
        });
        return NextResponse.json({ deletedTask }, { status: 200 });
    } catch (error) {
        console.error('Error deleting task:', error);
        return NextResponse.json({ message: 'Something went wrong!' }, { status: 500 });
    }
}
