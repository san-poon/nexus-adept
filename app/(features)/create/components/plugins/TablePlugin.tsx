import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { INSERT_TABLE_COMMAND } from "@lexical/table";
import { LexicalEditor } from "lexical";
import { useEffect, useState } from "react";


export function InsertTableDialog({
    activeEditor, onClose
}: {
    activeEditor: LexicalEditor;
    onClose: () => void;
}) {
    const [rows, setRows] = useState('5');
    const [columns, setColumns] = useState('5');
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        const row = Number(rows);
        const column = Number(columns);
        if (row && row > 0 && row <= 500 && column && column > 0 && column <= 50) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [rows, columns]);

    const onConfirmClick = () => {
        activeEditor.dispatchCommand(INSERT_TABLE_COMMAND, {
            columns, rows
        });
        onClose();
    };

    return (
        <>
            <div className="flex-col space-y-1">
                <div className="flex items-center">
                    <Label className="pe-8">Rows</Label>
                    <Input
                        className="w-24"
                        type="number"
                        placeholder="# of rows (1-500)"
                        onChange={(e) => setRows(e.target.value)}
                        value={rows}
                    />
                </div>
                <div className="flex items-center">
                    <Label className="pe-2">Columns</Label>
                    <Input
                        className=" w-24"
                        type="number"
                        placeholder="# of columns (1-50)"
                        value={columns}
                        onChange={(e) => setColumns(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex justify-center">
                <Button
                    type="button"
                    variant="outline"
                    disabled={isDisabled}
                    onClick={onConfirmClick}
                >
                    Confirm
                </Button>
            </div>
        </>
    )
}