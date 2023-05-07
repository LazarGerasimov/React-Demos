import { FormEvent, useRef, useState } from "react";
import { Button, Col, Form, FormGroup, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from 'react-select/creatable';
import { NoteData, Tag } from "../App";
import { v4 as uuidV4 } from "uuid";


type NoteFormProps = {
    onSubmit: (data: NoteData) => void;
    onAddTag: (tag: Tag) => void;
    availableTags: Tag[];
}

export function NoteForm({
    onSubmit,
    onAddTag,
    availableTags
}: NoteFormProps) {

    const titleRef = useRef<HTMLInputElement>(null);
    const markDownRef = useRef<HTMLTextAreaElement>(null);
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
    const navigate = useNavigate();


    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();

        onSubmit({
            title: titleRef.current!.value,
            markdown: markDownRef.current!.value,
            tags: selectedTags
        });

        navigate("..");
    }

    return (
        <>
            <Form onSubmit={onSubmitHandler}>
                <Stack gap={4}>
                    <Row>
                        <Col>
                            <FormGroup controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control ref={titleRef} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup controlId="tags">
                                <Form.Label>Tags</Form.Label>
                                <CreatableReactSelect
                                    onCreateOption={label => {
                                        const newTag = { id: uuidV4(), label }
                                        onAddTag(newTag)
                                        setSelectedTags(prev => [...prev, newTag]);
                                    }}
                                    value={selectedTags.map(tag => {
                                        return { label: tag.label, value: tag.id }
                                    })}
                                    options={availableTags.map(tag => {
                                        return { label: tag.label, value: tag.id }
                                    })}
                                    onChange={tags => {
                                        setSelectedTags(tags.map(tag => {
                                            return { label: tag.label, id: tag.value }
                                        }))
                                    }}
                                    isMulti
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup controlId="markdown">
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={markDownRef} required as="textarea" rows={15} />
                    </FormGroup>
                    <Stack direction="horizontal" gap={2} className="justify-content-end">
                        <Button type="submit" variant="primary">Save</Button>
                        <Link to="..">
                            <Button type="button" variant="outline-secondary">Cancel</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Form>
        </>
    )
}