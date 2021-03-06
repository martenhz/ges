<?php
class ProductEntity implements JsonSerializable {
    
    private $id;
    private $name;
    private $categoryId;
    
    /**
     * Accept an array of data matching properties of this class
     * and create the class
     *
     * @param array $data The data to use to create
     */
    public function __construct(array $data) {
        // no id if we're creating
        if(isset($data['id'])) {
            $this->id = $data['id'];
        }
        $this->name = $data['name'];
        $this->categoryId = $data['category_id'];
    }
    
    public function getId() {
        return $this->id;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function getCategoryId() {
        return $this->categoryId;
    }
    
    public function jsonSerialize() {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'categoryId' => $this->categoryId
        ];
    }
}