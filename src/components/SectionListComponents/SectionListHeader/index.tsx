import { Container, HeaderTitle} from './styles';

type SectionHeaderTitleProps ={
    title: string;
}
export const SectionListHeader =({ title}: SectionHeaderTitleProps)=>{
    return (
        <Container>
            <HeaderTitle>{title}</HeaderTitle>
        </Container>
    )
};
