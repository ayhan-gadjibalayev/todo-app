export default function DeleteTaskConfirmation () {
    

    return(
        <div className="modal-window">
            <h3 className="text-aaa">Вы уверены, что хотите удалить задачи?</h3>
            <div className="true-false-group">
                <p className="true same">Потвердить</p>
                <p className="false same">Отменить</p>
            </div>
        </div>
    );
}